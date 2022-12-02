// client/src/components/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Workout from "./components/Workout";

function App(event) {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [workout, setWorkout] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");



  useEffect(() => {
    fetch("/workouts")
      .then((r) => r.json())
      .then((workout) => setWorkout(workout));
  }, []);

  useEffect(() => {
    fetch("/exercises")
      .then((r) => r.json())
      .then((exercises) => setExercises(exercises));
  }, []);

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((user) => console.log(user));
  }, []);
const handleSearch = (event) => {
 const query = event.target.value;
 console.log(query)
     setSearchQuery(query);
}
  const searchList = exercises.filter((exercise) => {
    console.log(searchQuery === "");
    if (searchQuery === "") return true;
    return exercise.target.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1;
  });
  return (
    <>
      <BrowserRouter>
        <div>
          <div className="wrapper">...</div>
          <Navbar
            user={user}
            setUser={setUser}
            loggedIn={loggedIn}
            setLoggedIn={setLoggedIn}
          />
        </div>
        <Routes>
          <Route path="/signup" element={<Signup setUser={setUser} />} />
          <Route
            path="/login"
            element={
              <Login setUser={setUser} setErrors={setErrors} errors={errors} />
            }
          />
          <Route
            path="/"
            element={
              <Home
                exercises={exercises}
                workout={workout}
                // query={searchQuery}
                setSearchQuery={setSearchQuery}
                searchQuery={searchQuery}
                searchList={searchList}
                handleSearch={handleSearch}
              />
            }
          />
          <Route
            path="/workouts"
            element={<Workout exercises={exercises} workout={workout} />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
