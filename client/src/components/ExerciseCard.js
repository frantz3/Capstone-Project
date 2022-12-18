import { useState, useContext } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import { UserContext } from "../Context/UserProvider";
import Typography from "@mui/material/Typography";
import Button from "react-bootstrap/Button";

function ExerciseCard({ exerciseObj, workout }) {
  const [showWorkouts, setShowWorkouts] = useState(false);
  const { user, setUser } = useContext(UserContext);

  function handleAddExercise({ name, id }) {
    const config = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, id, exercise_id: exerciseObj.id }),
    };
    fetch("/add-exercise", config)
      .then((r) => r.json())
      .then((data) => {
        const deepClone = JSON.parse(JSON.stringify(user));
        console.log(deepClone);
        // Make a deep copy of the user
        // then access user_workouts on the deep clone
        // add the exercise from the data to the matching workout array on the deep clone
        // set user state to the updated deep clone
      });
  }

  return (
    <div>
      <Card
        key={exerciseObj.id}
        sx={{ maxWidth: 345 }}
        style={{
          boxSizing: "border-box",
          float: "left",
          padding: "10px",

          flexDirection: "row",
          textAlign: "center",
          margin: "40px",
          display: "block",
          width: "350px",
          height: "500px",
          maxHeight: "500px",
          maxWidth: "500px",
          border: "solid",
          borderColor: "#EDB518",
        }}
      >
        <div>
          <button
            style={{ backgroundColor: "white", border: "none" }}
            onClick={() => {
              setShowWorkouts(!showWorkouts);
            }}
          >
            <span style={{ fontSize: "30px", color: "#EDB518 " }}>&#43;</span>
          </button>
        </div>
        {showWorkouts
          ? workout.map((w) => {
              return (
                <Button
                  onClick={() => handleAddExercise(w)}
                  style={{
                    margin: "5px",
                    backgroundColor: "#EDB518",
                    color: "#79031D",
                    fontWeight: "bold",

                  }}
                >
                  {w.name}
                </Button>
              );
            })
          : null}
        <CardHeader title={exerciseObj.name} />
        <CardMedia
          component="img"
          height="194"
          image={exerciseObj.gifUrl}
          alt={exerciseObj.name}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            <p>Name: {exerciseObj.name}</p>
            <p>Body Part Targeted: {exerciseObj.target}</p>
            <p>Equipment: {exerciseObj.equipment}</p>
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default ExerciseCard;
