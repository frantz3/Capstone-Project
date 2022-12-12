import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
function EditForm({ editWorkout, setWorkout }) {
  const [formData, setFormData] = useState({
    name: "",
  });

  const handleChange = (e) => {
    e.preventDefault();
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  function handleUpdateClick(e) {
    e.preventDefault();
    fetch(`/workouts/${editWorkout.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        old_name: editWorkout.name,
        name: formData.name
      }),
    })
      .then((r) => r.json())
      .then((newName) => console.log(newName));
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
