// import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

import ExerciseCard from "./ExerciseCard";



function Workout({ workout, setWorkout, exercises, setEditWorkout }) {
  // const [formData, setFormData] = useState(prevState);
// const exerciseId = exercises.map((exerciseObj) => {
//   return exerciseObj.id
// })


  function handleDeleteWorkout(deletedWorkout) {
    // const prevState = {
    //   name: "",
    //   exercise_id: exerciseId,
    // };
    const updatedWorkouts = workout.filter((w) => w.id !== deletedWorkout.id);
    setWorkout(updatedWorkouts);
  }

  const listOfWorkouts = workout.map((w, index) => {

    function handleDeleteClick() {
      fetch(`/workouts/${w.id}`, {
        method: "DELETE",
      })
        .then((r) => r.json())
        .then(() => handleDeleteWorkout(w))

        
      }
    console.log(Object.values(w.exercise || {})[1])

      // function handleUpdateClick() {

      //   fetch(`/workouts/${w.id}`, {
      //     method: "PATCH",
      //     headers: {
      //       "Content-Type": "application/json",
      //     },
      //     body: JSON.stringify({ name: "", exercise_id: exerciseId }),
      //   }).then((r) => r.json())
      //   .then((newName) => console.log(newName))
      //   ;
      // }

    return (
      <div key={index}>
       
        
        <Accordion>
          <Accordion.Item eventKey="0">
            <button onClick={handleDeleteClick}>Delete</button>
            <button onClick={() => setEditWorkout({...w})}><Link to='/edit'>EDIT</Link></button>
       
            <Accordion.Header>{w.name}</Accordion.Header>
            <Accordion.Body>{
                    <div>
     

  
                    <Card
                      key={w.id}
                      sx={{ maxWidth: 345 }}
                      style={{
                        boxSizing: "border-box",
                        float: "left",
                        padding: "10px",
                        
                        flexDirection: "row",
                        textAlign: "center",
                        margin: "20px",
                        display: "block",
                        width: "350px",
                        height: "500px",
                        maxHeight: "500px",
                        maxWidth: "500px",
                      }}
                      >
                      <div>
                
                      {/* <button
                        onClick={() => {
                          setShowWorkouts(!showWorkouts);
                        }}
                        >
                        +
                      </button> */}
                      </div>
                      {/* {showWorkouts
                        ? workout.map((w) => {
                          
                          return <button>{w.name}</button>;
                        })
                        : null} */}
                      <CardHeader title={Object.values(w.exercise || {})[1]} />
                      <CardMedia
                        component="img"
                        height="194"
                        image={Object.values(w.exercise || {})[4]}
                        alt={w.name}
                        />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          <p>Name: {Object.values(w.exercise || {})[1]}</p>
                          <p>Body Part Targeted: {Object.values(w.exercise || {})[2]}</p>
                          <p>Equipment: {Object.values(w.exercise || {})[3]}</p>
                        </Typography>
                      </CardContent>
                    </Card>
                        </div>
              }</Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Body>
              in reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  });
  return <div>{listOfWorkouts}</div>;
}
export default Workout;
