import React, { useState } from "react";

function CreateForm({setWorkout,  exercises}) {
   
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

      
  



  const handleSubmit = (e) => {
    e.preventDefault();

    fetch('/workouts', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    })
      .then((r) => r.json())
      .then((data) => console.log(data));

    setWorkout(formData);
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
      <h1 style={{ marginBottom: 50 }}>Create A Name For Your Workout</h1>
    
      <div>
        <label
          htmlFor="name"
          
        >
          Workout Name
        </label>
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          style={{ padding: "10px" }}
        />
      </div>
      <br />

      <input type="submit">
        
      </input>
    </form>
  );
}

export default CreateForm;
