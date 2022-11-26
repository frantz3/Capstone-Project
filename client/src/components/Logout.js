import React from 'react'
import {  useNavigate } from "react-router-dom";

function Logout() {
    
  const handleLogoutClick = () => {
    const navigate = useNavigate()
    
    const config = {
      method: "DELETE",
    };

    fetch("/logout", config).then((resp) => {
      setUser({ username: "" });
      console.log(resp);
    });
  };

  return (
    <div>Logout</div>
  )
}

export default Logout