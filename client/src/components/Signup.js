import React, { useState } from "react";
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBRow,
  MDBInput,
  MDBIcon,
} from "mdb-react-ui-kit";

function Signup({ setUser }) {
  const [data, setData] = useState({
    username: "",
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const handleInputChange = (e) => {
    const stateCopy = { ...data };
    stateCopy[e.target.name] = e.target.value;
    setData(stateCopy);
  };

  function handleSubmit() {
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    };

    fetch("/signup", config)
      .then((r) => r.json())
      .then((user) => setUser(user));
  }
  return (
    <MDBContainer fluid>
      <div
        className="p-5 bg-image"
        style={{
          backgroundImage:
            "url(https://mdbootstrap.com/img/new/textures/full/171.jpg)",
          height: "300px",
        }}
      ></div>

      <MDBCard
        className="mx-5 mb-5 p-5 shadow-5"
        style={{
          marginTop: "-100px",
          background: "hsla(0, 0%, 100%, 0.8)",
          backdropFilter: "blur(30px)",
        }}
      >
        <MDBCardBody className="p-5 text-center">
          <h2 className="fw-bold mb-5">Sign up now</h2>

          <MDBRow>
            <MDBCol col="6">
              <MDBInput
                onChange={handleInputChange}
                value={data.first_name}
                wrapperClass="mb-4"
                label="First name"
                name="first_name"
                id="1"
                type="text"
              />
            </MDBCol>

            <MDBCol col="6">
              <MDBInput
                onChange={handleInputChange}
                value={data.last_name}
                wrapperClass="mb-4"
                label="Last name"
                name="last_name"
                id="2"
                type="text"
              />
            </MDBCol>
          </MDBRow>
            <MDBCol col="6">
              <MDBInput
                onChange={handleInputChange}
                value={data.username}
                wrapperClass="mb-4"
                label="Username"
                name="username"
                id="2"
                type="text"
              />
            </MDBCol>

          <MDBInput
            onChange={handleInputChange}
            wrapperClass="mb-4"
            label="Email"
            name="email"
            id="3"
            type="email"
            value={data.email}
          />
          <MDBInput
            onChange={handleInputChange}
            value={data.password}
            wrapperClass="mb-4"
            label="Password"
            name="password"
            id="4"
            type="password"
          />
          <MDBInput
            onChange={handleInputChange}
            value={data.password_confirmation}
            wrapperClass="mb-4"
            label="Password Confirmation"
            name="password_confirmation"
            id="5"
            type="password"
          />

          <MDBBtn className="w-100 mb-4" size="md" onClick={handleSubmit}>
            sign up
          </MDBBtn>

          <div className="text-center">
            <p>or sign up with:</p>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="facebook-f" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="twitter" size="sm" />
            </MDBBtn>

            <MDBBtn
              tag="a"
              color="none"
              className="mx-3"
              style={{ color: "#1266f1" }}
            >
              <MDBIcon fab icon="google" size="sm" />
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

export default Signup;
