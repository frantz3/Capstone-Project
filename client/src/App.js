// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null)
  const [errors, setErrors] = useState([])


  return (
    <BrowserRouter>
  
        <Routes>

        <Route path="/signup" element={<Signup setUser={setUser}/>} />
        <Route path="/" element={<Login setUser={setUser} setErrors={setErrors} errors={errors} />} />

        </Routes>
    
    </BrowserRouter>
  );
}

export default App;