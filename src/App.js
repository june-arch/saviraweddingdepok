import React from "react";
import Home from "./components/partial/home";
import Navbar from "./components/partial/navbar";
import Footer from "./components/partial/footer";
import ScrollUpButton from "react-scroll-up-button";

const App = () => {
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
