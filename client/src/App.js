
import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "./Context/UserProvider";
import { Routes, Route, useNavigate } from "react-router-dom";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import Home from "./components/pages/Home";
import Navbar from "./components/NavBar";
import Workout from "./components/Workout";
import EditForm from "./components/forms/EditForm";
import CreateForm from "./components/forms/CreateForm";
import Landing from "./components/pages/Landing";
import Calculator from "./components/pages/Calculator";

function App() {
  const [errors, setErrors] = useState([]);
  const [exercises, setExercises] = useState([]);
  const [loggedIn, setLoggedIn] = useState(false);
  const [workout, setWorkout] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [editWorkout, setEditWorkout] = useState(null);
  const navigate = useNavigate();
  const { user, setUser } = useContext(UserContext);

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
        r.json().then(({ errors }) => {
          setErrors(errors);
        });
      }
    });
  }, []);


  const handleSearch = (event) => {
    const query = event.target.value;
  
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
          element={<Workout setEditWorkout={setEditWorkout} />}
        />
        <Route path="/calculator" element={<Calculator />} />
        <Route path="/home" element={<Landing />} />
      </Routes>
    </>
  );
}

export default App;
