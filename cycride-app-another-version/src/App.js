import React, { Component } from "react";
import AboutUs from "./AboutUs";
// import logo from "./logo.svg";
import "./App.css";
import "./View.css"
import Navbar from "./Components/Navbar";
import Section from "./Components/Section";
import ContactUs from "./ContactUs";
import dummyText from "./DummyText";
import Home from "./Home";
import OurPurpose from "./OurPurpose";
import OurService from "./OurServices";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Home
          dark={true}
          id="section1"
        />
        <AboutUs
          title="WHO WE ARE?"
          dark={true}
          id="section2"
        />
        <OurService 
          title="WHAT WE OFFER?"
          dark={false}
          id="section3"
        />
        <OurPurpose
          title="WHO WE SERVE?"
          dark={true}
          id="section4"
        />
        <ContactUs
          title="CONTACT US"
          subtitle={dummyText}
          dark={false}
          id="section5"
        />
      </div>
    );
  }
}

export default App;
