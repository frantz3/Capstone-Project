// client/src/components/App.js
import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from "./components/Signup";


function App() {
  const [user, setUser] = useState(null)

  return (
    <BrowserRouter>
  
        <Routes>

        <Route path="/signup" element={<Signup setUser={setUser}/>} />
        </Routes>
    
    </BrowserRouter>
  );
}

export default App;