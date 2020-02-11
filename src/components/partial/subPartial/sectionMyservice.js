import React from "react";
import gal1 from "../../../assets/gal1.webp";
import gal2 from "../../../assets/makeup_artist.webp";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const SectionMyservice = () => {
  return (
    <section className="my-service">
      <div className="jumbotron">
        <div className="container">
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div id="title" className="text-center text-title pb-3">
              My Services
            </div>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
            <div
              id="text-2"
              className="text-center text-white w-75 mx-auto mb-5 pb-4"
            >
              <p>
                I've been working as a qualified wedding planner since 2013,
                forming a network with some of the best event vendors in Depok.
                No matter what ideas you have, I'm here to help
                make your dream event a reality. Contact me to schedule a free
                consultation and learn what I can do for you.
              </p>
            </div>
          </ScrollAnimation>

          <div className="row justify-content-center mt-3 pt-3">
            <div className="col-md-6 resize mt-2">
              <ScrollAnimation animateIn="fadeInLeft" delay={500} animateOnce={true}>
                <div className="card mx-auto d-block">
                  <img
                    src={gal1}
                    className="card-img-top img-fluid"
                    alt="none"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title text-title">
                      Wedding Venue Setup
                    </h5>
                    <h5 className="card-title text-title-2">
                      Lively and Fun
                    </h5>
                    <p className="card-text">
                      Whatever the circumstances, I am here to make your event
                      extra special. This service will help create a wonderful
                      and unique experience for your guests. I offer
                      competitive rates and work with the best vendors and
                      venues in the Depok City area, guaranteeing an
                      unforgettable event.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-6 resize mt-2">
              <ScrollAnimation animateIn="fadeInRight" delay={500} animateOnce={true}>
                <div className="card mx-auto d-block">
                  <img
                    src={gal2}
                    className="card-img-top img-fluid"
                    alt="none"
                  />
                  <div className="card-body text-center">
                    <h5 className="card-title text-title">
                      FLoral Arangment Coordiantion
                    </h5>
                    <h5 className="card-title text-title-2">
                      Perfectly Planned
                    </h5>
                    <p className="card-text">
                      I care about making your event the best possible
                      experience for everyone involved. I take care of all the
                      small, tedious details and arrangements so that my
                      clients can focus on the important stuff. That’s why I
                      make the effort to understand your exact needs, so the
                      event you imagine is the event you’ll get.
                    </p>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </div>
          <div className="row mt-5 pt-5">
            <a href="#getintouch" className="mx-auto get">
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionMyservice;
