import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {  useNavigate } from "react-router-dom";


function NavBar({ setUser, setLoggedIn, loggedIn }) {
    const [showBasic, setShowBasic] = useState(false);
    const navigate = useNavigate()

    const handleLogoutClick = () => {
   
        
        const config = {
          method: "DELETE",
        };
    
        fetch("/logout", config).then((resp) => {
          setUser({ username: "" })
          setLoggedIn(false)
          navigate('/login')
        });
      };
  return (
    <Navbar bg="light" expand="lg">
      <Container>

        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={handleLogoutClick} style={{ marginLeft: "190%" }}>
              Logout
            </Nav.Link>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;