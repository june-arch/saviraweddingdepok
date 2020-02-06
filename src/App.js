import React from "react";
import Home from "./components/partial/home";
import Navbar from "./components/partial/navbar";
import Footer from "./components/partial/footer";
import ScrollUpButton from "react-scroll-up-button";
import axios from 'axios';

const App = () => {
  //userIdFb = "1377942669031952";
  // const tokenFb = "EAAkThgfRLZBwBAKyPgVJ69t5WjM5lHxg0FdnbhRMUHr4B4qyvVdHp8tYRnkErCqpj6KqJi4VinZBkbZADxy7FTCwGZCIWHifdxBp2ZAfThKBTyu2JoJVjiRWVSQW5BdUHy03Nql2Vp6zqgtu68EdmdriuCrnrkWtQYPJEzanjbvGsZBCq0xGSS";
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
