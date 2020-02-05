import React from "react";
import ApiInstagramFeed from "../../api/apiInstagramFeed";
import "animate.css/animate.min.css";
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
          <ApiInstagramFeed />
        </div>
      </div>
    </section>
  )
}
export default SectionInstafeed;
