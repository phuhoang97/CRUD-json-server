import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useParams } from "react-router-dom";

function EditUser() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    phone: "",
    website: "",
  });

  const { name, username, email, phone, website } = user;
  const { id } = useParams();
  console.log("id là: ", id);

  const handleChangeInput = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.put(`http://localhost:3000/users/${id}`, user);
    window.location.href = "/home";
  };

  const loadUser = async (e) => {
    const result = await axios.get(`http://localhost:3000/users/${id}`);
    setUser(result.data);
  };

  useEffect(() => {
    loadUser();
  }, []);

  return (
    <div>
      <div className='container'>
        <div className='w-75 mx-auto shadow p-5'>
          <h3>Add User</h3>
          <form onSubmit={(e) => handleSubmit(e)}>
            <label htmlFor=''>Name: </label>
            <input
              type='text'
              placeholder='Enter Your Name'
              value={name}
              name='name'
              onInput={(e) => handleChangeInput(e)}
            />
            <br />
            <label htmlFor=''>UserName: </label>
            <input
              type='text'
              placeholder='Enter Your Username'
              value={username}
              name='username'
              onInput={(e) => handleChangeInput(e)}
            />
            <br />
            <label htmlFor=''>Email: </label>
            <input
              type='text'
              placeholder='Enter Your Email Address'
              value={email}
              name='email'
              onInput={(e) => handleChangeInput(e)}
            />
            <br />
            <label htmlFor=''>UserName: </label>
            <input
              type='text'
              placeholder='Enter Your Phone Number'
              value={phone}
              name='phone'
              onInput={(e) => handleChangeInput(e)}
            />
            <br />
            <label htmlFor=''>Website: </label>
            <input
              type='text'
              placeholder='Enter Your Website'
              value={website}
              name='website'
              onInput={(e) => handleChangeInput(e)}
            />
            <br />

            <Button variant='primary' type='submit'>
              Update User
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
