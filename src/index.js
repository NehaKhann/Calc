//calculator using react components and import/export module.
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { Add, Sub, Mul, Div } from "./App";

ReactDOM.render(
  <div className="center">
    <div className="property-description">
      <h5>Calculator </h5>
      <p>
        {" "}
        <ol>
          <li>The result of addition is {Add(5, 7)} </li>
          <li>The result of subtraction is {Sub(7, 5)}</li>
          <li>The result of multiplication is {Mul(7, 5)}</li>
          <li>The result of division is {Div(1, 3)}</li>
        </ol>
      </p>
    </div>
  </div>,
  document.getElementById("root")
);
