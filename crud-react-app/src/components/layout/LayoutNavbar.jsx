import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./LayoutNavbar.css";
import { Link } from "react-router-dom";

function LayoutNavbar() {
  return (
    <>
      <Navbar bg='lightNavbar' expand='lg'>
        {/* <div className='container'> */}
        <Container>
          <Navbar.Brand href='#home'>React CRUD</Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav>
              <Nav.Link href='home'>Home</Nav.Link>
              <Nav.Link href='contact'>Contact</Nav.Link>
              <Nav.Link href='about'>About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
        {/* </div> */}
        <Link
          to='/user/add'
          className='btn btn-outline-light w-25'
          style={{ marginRight: "50px" }}
        >
          Add user
        </Link>
      </Navbar>
    </>
  );
}

export default LayoutNavbar;
