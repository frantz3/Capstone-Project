// import React, { useEffect, useState } from "react";
import Accordion from 'react-bootstrap/Accordion';


function Workout({workout}) {

    const listOfWorkouts = workout.map((w) => {
     
        return (
          
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{w.name}</Accordion.Header>
        <Accordion.Body>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Body>
         in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        )
    })
   return ( <div>
     
  <div>{listOfWorkouts}</div>
   </div>)
}
export default Workout;
