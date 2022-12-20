import * as React from "react";
import ExerciseCard from "../ExerciseCard";

export default function Home({
  workout,
  searchQuery,
  searchList,
  handleSearch,
}) {
  return (
    <div className="container" style={{textAlign: "center", color: "#79031D"}}>
      <h2>Find an Exercise</h2>

      <div className="list-wrapper">
        <div className="filter-container">
          <input
          style={{borderRadius: "25px", width: "230px", borderColor: "white", paddingLeft: "10px" }}
            type="text"
            name="search"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearch}
          />
        </div>
        {searchList.map((exerciseObj) => {
          return (<div key={exerciseObj.id}>
            <div style={{backgroundImage: "url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNOwfrhpuWJsNGZpPdH6ArUba9I_nHZ0C-PQ&usqp=CAU)"}}></div>
            <ExerciseCard exerciseObj={exerciseObj} workout={workout} />
          </div>)
        })}
      </div>
    </div>
  );
}
