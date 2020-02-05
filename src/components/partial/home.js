import React from "react";
import "../../css/home.css";
import SectionWelcome from "./subPartial/sectionWelcome";
import SectionIntro from "./subPartial/sectionIntro";
import SectionMyservice from "./subPartial/sectionMyservice";
import SectionGallery from "./subPartial/sectionGallery";
import SectionInstafeed from "./subPartial/sectionInstafeed";

const Home = () => {

  return (
    <div>
      <SectionWelcome />
      <SectionIntro />
      <SectionMyservice />
      <SectionGallery />
      <SectionInstafeed />
    </div>
  )
}

export default Home;
