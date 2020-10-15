import React from "react";
import SectionWelcome from "./partial/sectionWelcome";
import SectionIntro from "./partial/sectionIntro";
import SectionMyservice from "./partial/sectionMyservice";
import SectionGallery from "./partial/sectionGallery";
import SectionInstafeed from "./partial/sectionInstafeed";

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
