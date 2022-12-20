import React, { useState,useContext } from "react";
import { useNavigate } from "react-router";
import { UserContext } from "../../Context/UserProvider";

function CreateForm() {
  const [formData, setFormData] = useState({
    name: "",
  });
  const navigate = useNavigate()
const { user ,setUser } = useContext(UserContext)
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("/workouts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => {
        const userCopy = JSON.parse(JSON.stringify(user))
        const newWorkout = {}
        newWorkout[data.name] = []
        // debugger
        userCopy.user_workouts.push(newWorkout)
        console.log(userCopy)
        setUser(userCopy)
        navigate('/workouts')
      });


  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "block",
        width: "50%",
        marginLeft: 305,
        borderStyle: "hidden",
        fontWeight: "bold",
        marginTop: "10px",

        fontSize: 25,
        textAlign: "center",
        padding: 100,
      }}
    >
      <h1 style={{ marginBottom: 50, marginTop: "-250px", color: "#79031D" }}>
        Create A Name For Your Workout
      </h1>

      <div>
        <label style={{color: "#79031D" }} htmlFor="name">Workout Name </label>
        <br />
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: "10px" }}
        />
      </div>
      <br />

      <input style={{color: "#79031D",backgroundColor: "white", borderColor: "#79031D" }}type="submit"></input>
    </form>
  );
}

export default CreateForm;
