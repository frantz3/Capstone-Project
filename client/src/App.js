// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Home from "./components/Home";

function App() {
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState([])
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    fetch('/exercises')
    .then(r => r.json())
    .then((exercises) => setExercises(exercises))
  }, [])


  return (
    <BrowserRouter>
  
        <Routes>

        <Route path="/signup" element={<Signup setUser={setUser}/>} />
        <Route path="/" element={<Login setUser={setUser} setErrors={setErrors} errors={errors} />} />
        <Route path="/home" element={<Home exercises={exercises} />} />

        </Routes>
    
    </BrowserRouter>
  );
}

export default App;