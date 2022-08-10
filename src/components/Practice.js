import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Practice = () => {
  const algoNames = ["BFS", "DFS", "Dijkstra"];
  const algoList = algoNames.map((algo) => <h2>{algo}</h2>);
  return <div className="listName">{algoList}</div>;
};

export default Practice;
