import React, { useState } from "react";
import { useParams } from "react-router";

function Calculator() {

  const [calculator, setCalculator] = useState("");
  let { id } = useParams();

  const config = {
    method: "GET",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      age: "25",
      gender: "male",
      weight: "70",
      height: "178",
      neck: "50",
      waist: "96",
      hip: "92",
    }),
  };
  function handleSubmit(e) {
    e.preventDefault();

    fetch("/calculator", { config })
      .then((r) => r.json())
      .then((calculator) => console.log(calculator));
  }
  return (
    <form onSubmit={handleSubmit}>
      <button>send</button>
    </form>
  );
}

export default Calculator;
