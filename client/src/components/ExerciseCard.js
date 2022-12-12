import { useState } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";



function ExerciseCard({exerciseObj, workout}) {
    const [showWorkouts, setShowWorkouts] = useState(false);

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
        margin: "20px",
        display: "block",
        width: "350px",
        height: "500px",
        maxHeight: "500px",
        maxWidth: "500px",
      }}
      >
      <div>

      <button
        onClick={() => {
          setShowWorkouts(!showWorkouts);
        }}
        >
        +
      </button>
      </div>
      {/* {showWorkouts
        ? workout.map((w) => {
          
          return <button>{w.name}</button>;
        })
        : null} */}
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

export default ExerciseCard