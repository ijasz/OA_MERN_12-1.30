import { createElement, Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

const root = ReactDOM.createRoot(document.querySelector("#root"));

// const h1 = createElement("h1", { className: "title" }, "hello world");

root.render(
  <>
    <h1 className="title">How to install Node js</h1>
    <h1 className="title">What is NPM, NPX, NVM ?</h1>
    <h1 className="title">Node Modulus ?</h1>
    <h1 className="title">Package.json ?</h1>
    <h1 className="title">Difference JS DOM VS Virtual DOM ?</h1>
    <h1 className="title">How to create react app ?</h1>
    <h1 className="title">How to create virtual DOM in react js ?</h1>
    <h1 className="title">How to render element in virtual DOM ?</h1>
    <h1 className="title">How react creates elements ?</h1>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
