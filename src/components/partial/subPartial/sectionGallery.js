import React from "react";
import pict1 from "../../../assets/1-min.jpeg";
import pict2 from "../../../assets/2-min.jpg";
import pict3 from "../../../assets/3-min.jpeg";
import pict4 from "../../../assets/4-min.jpg";
import pict5 from "../../../assets/5-min.jpg";
import pict6 from "../../../assets/6-min.jpeg";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const SectionGallery = () => {
  return (
    <section className="gallery">
      <div className="jumbotron">
        <div className="container-fluid">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div id="title" className="text-center text-title pb-5 mb-5">
              Gallery
            </div>
          </ScrollAnimation>
          <div className="row mt-5">
            <div className="col-md-4 resize">
              <ScrollAnimation animateIn="fadeInLeft" delay={500} animateOnce={true}>
                <div className="card">
                  <img src={pict1} className="img-fluid" alt="none" />
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInLeft" delay={500} animateOnce={true}>
                <div className="card">
                  <img src={pict4} className="img-fluid" alt="none" />
                </div>
              </ScrollAnimation>
            </div>

            <div className="col-md-4 resize">
              <ScrollAnimation animateIn="fadeInDown" delay={500} animateOnce={true}>
                <div className="card ">
                  <img src={pict2} className="img-fluid" alt="none" />
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInUp" delay={500} animateOnce={true}>
                <div className="card">
                  <img src={pict5} className="img-fluid" alt="none" />
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-4 resize">
              <ScrollAnimation animateIn="fadeInRight" delay={500} animateOnce={true}>
                <div className="card">
                  <img src={pict3} className="img-fluid" alt="none" />
                </div>
              </ScrollAnimation>
              <ScrollAnimation animateIn="fadeInRight" delay={500} animateOnce={true}>
                <div className="card">
                  <img src={pict6} className="img-fluid" alt="none" />
                </div>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
export default SectionGallery;
