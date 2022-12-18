// import React, { useEffect, useState } from "react";
import Accordion from "react-bootstrap/Accordion";
import { Link } from "react-router-dom";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { UserContext } from "../Context/UserProvider";
import Typography from "@mui/material/Typography";
import { useContext } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import EditIcon from "@mui/icons-material/Edit";

function Workout({ workout, setWorkout, exercises, setEditWorkout }) {
  const { user, setUser } = useContext(UserContext);
  // const [formData, setFormData] = useState(prevState);
  // const exerciseId = exercises.map((exerciseObj) => {
  //   return exerciseObj.id
  // })

  function handleDeleteWorkout(deletedWorkout) {
    // const prevState = {
    //   name: "",
    //   exercise_id: exerciseId,
    // };
    const userCopy = JSON.parse(JSON.stringify(user))
    console.log(userCopy)
    const updatedWorkouts = userCopy.user_workouts.filter((w) => Object.keys(w)[0] !== Object.keys(deletedWorkout)[0]);
    userCopy.user_workouts = updatedWorkouts
    console.log(userCopy)
    setUser(userCopy);
  }

  const listOfWorkouts = user?.user_workouts.map((w, index) => {
    function handleDeleteClick() {
      fetch(`/workouts/${Object.keys(w)[0]}`, {
        method: "DELETE",
      })
        // .then((r) => r.json())
        .then(() => handleDeleteWorkout(w));
    }
console.log(Object.keys(w)[0])
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
    //   <button
    //   onClick={() => {
    //     navigate("/workouts");
    //   }}
    // >
    //   Workouts
    // </button>
    return (
      <div key={index} >
        <Accordion
          style={{
            color: "#EDB518",
            width: "100%",
            paddingLeft: "200px",
            paddingRight: "200px",
            textAlign: "center",
        
          }}
          onClick={(e) => {
            e.stopPropagation()
           
           }}>
        
          <Accordion.Item eventKey="0" onClick={(e) => {
                 console.log("item")
                
                }}>
            <Accordion.Header
          
              style={{ textAlign: "center" }}
            >
              <IconButton
                aria-label="delete"
                onClick={(e) => {
                 
                  handleDeleteClick()
                }}
                style={{ color: "#79031D" }}
              >
                <DeleteIcon />
              </IconButton>
              <IconButton
                aria-label="edit"
                onClick={() => setEditWorkout({ ...w })}
              >
                <Link to="/Edit">
                  <EditIcon style={{ color: "#EDB518" }} />
                </Link>
              </IconButton>
              <p
                style={{
                  paddingLeft: "520px",
                  fontSize: "20px",
                  fontWeight: "1000",
                  color: "#EDB518"
                }}
              >
                {Object.keys(w)[0]}
              </p>
            </Accordion.Header>
            <Accordion.Body >
              {Object.values(w)[0].map((exercise, index) => {
                // debugger
                return (
                  <div>
                    <Card
                      key={index}
                      sx={{ maxWidth: 345 }}
                      style={{
                        boxSizing: "border-box",
                        float: "left",
                        padding: "75px",
                        
                        flexDirection: "row",
                        textAlign: "center",
                        margin: "20px",
                        display: "block",
                        width: "350px",
                        height: "500px",
                        maxHeight: "500px",
                        maxWidth: "500px",
                        border:"solid",
                        borderColor: "#EDB518"
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
                      <CardHeader
                        title={Object.values(exercise || {})[1]}
                        style={{ marginTop: "-80px" }}
                      />
                      <CardMedia
                        component="img"
                        height="194"
                        image={Object.values(exercise || {})[4]}
                        alt={Object.keys(w)[0]}
                      />
                      <CardContent>
                        <Typography variant="body2" color="text.secondary">
                          <p>Name: {Object.values(exercise || {})[1]}</p>
                          <p>
                            Body Part Targeted:{" "}
                            {Object.values(exercise || {})[2]}
                          </p>
                          <p>Equipment: {Object.values(exercise || {})[3]}</p>
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                );
              })}
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    );
  });
  return <div>{listOfWorkouts}</div>;
}
export default Workout;
