import React from "react";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";

const SectionIntro = () => {
  return (
    <section className="intro">
      <div className="jumbotron">
        <div className="container">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div id="title" className="text-center text-title pb-3">
              Saviraweddingdepok
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div id="text-1" className="text-center text-white pb-3 text-title-2">
              Because in your dreams, every detail matters.
            </div>
            <div id="text-2" className="text-center text-white w-75 mx-auto">
              <p>
                With Saviraweddingdepok, your next event is sure to be the
                talk of the town. I use my creativity and years of experience
                to make your special day turn out exactly how you want it. i
                will make sure every detail is taken care of.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
    </section>
  )
}

export default SectionIntro;
