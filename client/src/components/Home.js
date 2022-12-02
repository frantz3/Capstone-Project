import { useState, useEffect } from "react";
import * as React from "react";
import ExerciseCard from "./ExerciseCard";

export default function Home({ exercises, workout, searchQuery, searchList, handleSearch }) {
 
  
  return (
    <div className="container">
      <h2>Search Filter Array of Objects</h2>

      <div className="list-wrapper">
        <div className="filter-container">
          <input
            type="text"
            name="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        {searchList.map((exerciseObj) => {
          return (
            <ExerciseCard exerciseObj={exerciseObj} workout={workout} /> 
          )
        })}
      </div>
    </div>
  );
}
//   const listOfExercises = exercises.map((exerciseObj) => {
//     return (
//           <Card sx={{ maxWidth: 345 }}>
//             <CardHeader title={exerciseObj.name} />
//             <CardMedia
//               component="img"
//               height="194"
//               image={exerciseObj.gifUrl}
//               alt={exerciseObj.name}
//             />
//             <CardContent>
//               <Typography variant="body2" color="text.secondary" >
//                 <p>Name: {exerciseObj.name}</p>
//                 <p>Body Part Targeted: {exerciseObj.target}</p>
//             <p>Equipment: {exerciseObj.equipment}</p>
//           </Typography>
//         </CardContent>
//       </Card>
//     );
//   });
// return <li style={{display: "-ms-inline-flexbox"}}>{listOfExercises}</li>;
