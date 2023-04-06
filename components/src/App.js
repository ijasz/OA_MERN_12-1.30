import { Component } from "react";
import { About } from "./Components/about";
import { Home } from "./Components/home";

export class App extends Component {
  render() {
    return (
      <>
        <About />
        <Home />
      </>
    );
  }
}
