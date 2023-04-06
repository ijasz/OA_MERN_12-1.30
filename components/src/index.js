import { createElement, StrictMode, Component, Fragment } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./App";

const rootElement = ReactDOM.createRoot(
  document.querySelector("#root-element")
);

rootElement.render(<App />);

// const root = ReactDOM.createRoot(document.querySelector("#root"));

// root.render(<h1>hello</h1>);

// console.log(createElement("h1", { className: "title" }, "hello"));
