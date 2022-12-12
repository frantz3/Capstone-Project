// client/src/components/App.js
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";
import Navbar from "./components/NavBar";
import Workout from "./components/Workout";
import EditForm from "./components/EditForm";
import CreateForm from "./components/CreateForm";


function App() {
  const [user, setUser] = useState(null);
  const [errors, setErrors] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [workout, setWorkout] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editWorkout, setEditWorkout] = useState(null);
  const navigate = useNavigate()
  useEffect(() => {
    fetch("/workouts")
      .then((r) => r.json())
      .then((workout) => setWorkout(workout));
  }, []);

  useEffect(() => {
    fetch("/exercises").then((r) => {

      if (r.ok) {
        r.json().then((data) => setExercises(data));
      } else {
        r.json().then(({errors}) => {
          setErrors(errors);
        });
      }
    });
  }, []);

  useEffect(() => {
    fetch("/me")
      .then((r) => r.json())
      .then((user) => setUser({ ...user }));
  }, []);
  const handleSearch = (event) => {
    const query = event.target.value;
    console.log(query);
    setSearchQuery(query);
  };
  const searchList = exercises.filter((exercise) => {
    if (searchQuery === "") return true;
    return (
      exercise.target.toLowerCase().indexOf(searchQuery.toLowerCase()) !== -1
    );
  });
  return (
    <>

        <div>
          <button onClick={() => {
            navigate('/workouts')
          }}>Workouts</button>
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
            path="/edit"
            element={
              <EditForm
                workout={workout}
                setWorkout={setWorkout}
                exercises={exercises}
                editWorkout={editWorkout}
                setEditWorkout={setEditWorkout}
              />
            }
          />
          <Route
            path="/create"
            element={
              <CreateForm
                workout={workout}
                setWorkout={setWorkout}
                exercises={exercises}
              />
            }
          />
          <Route
            path="/"
            element={
              <Home
                exercises={exercises}
                workout={workout}
                setSearchQuery={setSearchQuery}
                searchQuery={searchQuery}
                searchList={searchList}
                handleSearch={handleSearch}
              />
            }
          />
          <Route
            path="/workouts"
            element={
              <Workout
                exercises={exercises}
                workout={workout}
                setWorkout={setWorkout}
                setEditWorkout={setEditWorkout}
              />
            }
          />
        </Routes>

    </>
  );
}

export default App;
