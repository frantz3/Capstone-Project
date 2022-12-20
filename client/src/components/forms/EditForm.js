import React, { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router";
import { UserContext } from "../../Context/UserProvider";

function EditForm({ editWorkout, setWorkout }) {
  const navigate = useNavigate()
  const { user, setUser } = useContext(UserContext)
  const [formData, setFormData] = useState({
    name: "",
  });
console.log(editWorkout)
  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleUpdateClick(e) {
    e.preventDefault();
   
    fetch(`/workouts/${Object.keys(editWorkout)[0]}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        old_name: Object.keys(editWorkout)[0],
        name: formData.name
      }),
    })
      .then((r) => r.json())
      .then((workoutNames) => {
        console.log(workoutNames)
        let userCopy = JSON.parse(JSON.stringify(user))
        userCopy.user_workouts = userCopy.user_workouts.map((w) => {
         
          if (Object.keys(w)[0] === workoutNames.old_name) {
          return {[workoutNames.name] : Object.values(w)[0]}
          } else {
            return w
          }
        })
    
        setUser(userCopy)
        navigate('/workouts')
      });
  }

  return (
    <Form onSubmit={handleUpdateClick}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label></Form.Label>
        <Form.Control
          onChange={handleChange}
          name="name"
          placeholder="Name"
          value={formData.name}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default EditForm;
