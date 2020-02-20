import React from "react"
import ScrollUpButton from "react-scroll-up-button"
import Home from "./Home"
import Navbar from "./Navbar"
import Footer from "./Footer"

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
