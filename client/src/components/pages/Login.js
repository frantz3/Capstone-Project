import React, { useState, useContext } from "react";
import { UserContext } from "../../Context/UserProvider";
import { useNavigate } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCheckbox,
} from "mdb-react-ui-kit";

function Login({ errors, setErrors }) {
  const { setUser } = useContext(UserContext);
  const [login, setLogin] = useState({
    username: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const stateCopy = { ...login };
    stateCopy[e.target.name] = e.target.value;
    setLogin(stateCopy);
  };

  function handleLogin() {
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(login),
    };
    fetch("/login", config).then((res) => {
      setLogin({
        username: "",
        password: "",
      });
      if (res.ok) {
        return res.json().then((user) => setUser(user));
      } else {
        res.json().then(({ errors }) => setErrors(errors));
      }
    });
    navigate('/')
  }
  
  return (
    <MDBContainer className="my-5">
      <MDBCard>
        <MDBRow className="g-0 d-flex align-items-center">
          <MDBCol md="4">
            <MDBCardImage
              src="https://images.unsplash.com/photo-1637430308606-86576d8fef3c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZGFyayUyMGd5bXxlbnwwfHwwfHw%3D&w=1000&q=80"
              alt="phone"
              className="rounded-t-5 rounded-tr-lg-0"
              fluid
            />
          </MDBCol>

          <MDBCol md="8">
            <MDBCardBody>
              {errors.map((err) => {
                return <div style={{ color: "red" }}>{err}</div>;
              })}
              <MDBInput
                wrapperClass="mb-4"
                label="Enter Username"
                id="form1"
                type="username"
                name="username"
                value={login.username}
                onChange={handleInputChange}
              />
              <MDBInput
                wrapperClass="mb-4"
                label="Enter Password"
                id="form2"
                type="password"
                name="password"
                value={login.password}
                onChange={handleInputChange}
              />

              <div className="d-flex justify-content-between mx-4 mb-4">
                <MDBCheckbox
                  name="flexCheck"
                  value=""
                  id="flexCheckDefault"
                  label="Remember me"
                />
                <a href="/signup" style={{ color: "#79031D" }}>Register</a>
              </div>

              <MDBBtn className="mb-4 w-100" onClick={handleLogin} style={{backgroundColor: "#79031D", color: "#EDB518" }}>
                Sign in
         
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </MDBCard>
    </MDBContainer>
  );
}

export default Login;
