import React, { useEffect, useState } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Home() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const loadUser = async () => {
      const result = await axios.get("http://localhost:3000/users");
      setUsers(result.data);
    };

    loadUser();
  }, []);

  return (
    <div style={{ marginTop: "50px", textAlign: "center" }}>
      <h1>Home Page</h1>
      <Table striped bordered hover>
        <thead>
          <tr className='bg-dark text-white'>
            <th>#</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <th scope='row'>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.username}</td>
                <td>{user.email}</td>
                <Link>
                  <td className='btn btn-primary'>
                    <i className='fa-solid fa-eye'></i>
                  </td>
                </Link>
                <Link>
                  <td>
                    <Button variant='info'>
                      <Link to={`/user/edit/${user.id}`}>Edit</Link>
                    </Button>
                  </td>
                </Link>
                <Link>
                  <td>
                    <Button variant='danger'>Delete</Button>
                  </td>
                </Link>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}

export default Home;
