import React, { Component } from "react";
// import logo from "./logo.svg";
import "./css/App.css";
import Navbar from "./Components/Navbar";
import CONTACTUS from "./Components/CONTACTUS";
import Home from "./Components/Home";
import HOWITWORKS from "./Components/HOWITWORKS";
import WHOWESERVE from "./Components/WHOWESERVE";
import WHATWEOFFER from "./Components/WHATWEOFFER";
import WHOWEARE from "./Components/WHOWEARE";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home
          id="section1"
        />
        <WHOWEARE
          title="WHO WE ARE?"
          id="section2"
        />
        <WHATWEOFFER 
          title="WHAT WE OFFER?"
          id="section3"
        />
        <WHOWESERVE
          title="WHO WE SERVE?"
          id="section4"
        />
        <HOWITWORKS
          title="HOW IT WORKS?"
          id="section5"
        />
        <CONTACTUS
          title="CONTACT US"
          id="section6"
        />
      </div>
    );
  }
}

export default App;
