import React from "react";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";

const SectionInstafeed = () => {
  return (
    <section className="insta-feed">
      <div className="jumbotron">
        <div className="container-fluid">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div id="title" className="text-center text-title pb-5 mb-5">
              Instagram Feed
            </div>
          </ScrollAnimation>
          {/* <ApiInstagramFeed /> */}
          <h1> Here is Instagram Yooo!! </h1>
        </div>
      </div>
    </section>
  )
}
export default SectionInstafeed;
