import { useState } from "react";
import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";

import Typography from "@mui/material/Typography";

export default function Home({ exercises }) {
  const [filteredList, setFilteredList] = useState(exercises);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    const searchList = exercises.filter((exercise) => {
      return exercise.name.toLowerCase().indexOf(query.toLowerCase()) !== -1;
    });

    setFilteredList(searchList);
  };

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

        {filteredList.map((exerciseObj) => {
          return (
            <Card
              sx={{ maxWidth: 345 }}
              style={{
                boxSizing: "border-box",
                float: "left",
                padding: "10px",
                display: "flex",
                flexDirection: "row",
                textAlign: "center",
                margin: "20px",
                display: "block",
                width: "200px",
                height: "500px",
                maxHeight: "500px",
                maxWidth: "500px",
             
            

              }}
            >
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
