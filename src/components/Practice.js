import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

const Practice = () => {
  // const algoNames = ["BFS", "DFS", "Dijkstra"];
  // const algoList = algoNames.map((algo) => <h2>{algo}</h2>);
  return (
    <div className="algo-links">
      <ul>
        <li className="list-css">
          <Link to="/bfs">BFS</Link>
          <p>Try to solve this algorithm</p>
        </li>
        <li className="list-css">
          <Link to="/dfs">DFS</Link>
          <p>Try to solve this algorithm</p>
        </li>
        <li className="list-css">
          <Link to="/lcs">LCS</Link>
          <p>Try to solve this algorithm</p>
        </li>
        <li className="list-css">
          <Link to="/lis">LIS</Link>
          <p>Try to solve this algorithm</p>
        </li>
        <li className="list-css">
          <Link to="/bubblesort">BubbleSort</Link>
          <p>Try to solve this algorithm</p>
        </li>
        <li className="list-css">
          <Link to="/countingsort">CountingSort</Link>
          <p>Try to solve this algorithm</p>
        </li>
      </ul>
    </div>
  );

};

export default Practice;
