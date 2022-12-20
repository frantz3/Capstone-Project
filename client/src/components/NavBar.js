import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import React, { useState, useContext } from "react";
import { UserContext } from "../Context/UserProvider";
import "bootstrap/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";

function NavBar({ setLoggedIn, loggedIn }) {
  const { setUser } = useContext(UserContext);
  const [showBasic, setShowBasic] = useState(false);
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    const config = {
      method: "DELETE",
    };

    fetch("/logout", config).then((resp) => {
      setUser({ username: "" });
      setLoggedIn(false);
      navigate("/login");
    });
  };
  return (
    <>
      <Navbar  style={{marginBottom: "304px", marginTop: "-24px", backgroundColor: "#79031D"}}>
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/home" style={{ color: "#EDB518" }}>Home</Nav.Link>
            <Nav.Link href="/workouts" style={{ color: "#EDB518" }}>Workouts</Nav.Link>
            <Nav.Link href="/" style={{ color: "#EDB518" }}>Exercise Guide</Nav.Link>
            <Nav.Link href="/create" style={{ color: "#EDB518" }}>Create A Workout</Nav.Link>
            <Nav.Link
              onClick={handleLogoutClick}
              style={{ marginLeft: "200%", color: "#EDB518" }}
            >
              Logout
            </Nav.Link>
            </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
