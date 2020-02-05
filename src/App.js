import React from "react";
import Home from "./components/partial/home";
import Navbar from "./components/partial/navbar";
import Footer from "./components/partial/footer";
import ScrollUpButton from "react-scroll-up-button";
import axios from 'axios';

const App = () => {
  // const tokenFb = "EAAkThgfRLZBwBANdJWyNyzHDMKCj7MybaVZBG93Etb5AXGjnnmYggvxtGbYaIuZAwfcySmBnjYjSvaiA6sORqjWm2bBAZBvX9WJ0ZB0BIKe8xiZBU8fhvBuZCQMwriir5EqKve9V04Qjkbsfj0IwlwVPx9vZAtZCxgFf39nWP6CUJwHfg4SrPMVxkPKEOjCr5CINNthIPmo4j5gZDZD";
  // const baseUrlFb = "https://graph.facebook.com/v6.0";
  // axios.get

  return (
    <div>
      <Navbar />
      <Home />
      <Footer />
      <ScrollUpButton
        ContainerClassName="AnyClassForContainer"
        TransitionClassName="AnyClassForTransition"
        style={{ zIndex: 1 }}
      />
    </div>
  )
}

export default App;
