import React from "react";
import ReactDOM from "react-dom";

function Add(a, b) {
  return a + b;
}
function Sub(a, b) {
  return a - b;
}
function Mul(a, b) {
  return a * b;
}
function Div(a, b) {
  let result = (a / b).toFixed(2);
  return result;
}
export { Add, Sub, Mul, Div };
