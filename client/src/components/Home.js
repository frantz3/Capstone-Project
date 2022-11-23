import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";




export default function Home({ exercises }) {
  const listOfExercises = exercises.map((exerciseObj) => {
    return (
      <Card sx={{ maxWidth: 345 }}>
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
    );
  });

  return <li style={{display: "-ms-inline-flexbox"}}>{listOfExercises}</li>;
}
