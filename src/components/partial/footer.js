import React from "react";
import "../../css/footer.css";
import { ReactComponent as Fb } from "../../assets/facebook-logo.svg";
import { ReactComponent as Ig } from "../../assets/instagram-logo.svg";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

const Footer = () => {
  return (
    <div className="footer">
      <div className="jumbotron">
        <div className="container-fluid">
          <div className="row">
            <div id="title" className="mx-auto text-title pb-3">
              <ScrollAnimation animateIn="fadeIn" animateOnce={true}>Contact Us</ScrollAnimation>
            </div>
          </div>
          <div className="row mt-3 pt-3">
            <div className="col-md-6 resize mt-2 center-map text-center">
              <ScrollAnimation animateIn="fadeInLeft" delay={500} animateOnce={true}>
                <div className="card mx-auto d-block">
                  <iframe
                    className="gmap_canvas col-sm-6"
                    src="https://maps.google.com/maps?q=savira%20private%20makeup&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    alt="none"
                    title="2"
                  />
                </div>
              </ScrollAnimation>
            </div>
            <div className="col-md-6 resize mt-2 center-map text-center">
              <ScrollAnimation animateIn="fadeInRight" delay={500} animateOnce={true}>
                <div className="card mx-auto d-block">
                  <iframe
                    className="gmap_canvas col-sm-6"
                    src="https://maps.google.com/maps?q=savira%20wedding%20depok&t=&z=17&ie=UTF8&iwloc=&output=embed"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    alt="none"
                    title="1"
                  />
                </div>
              </ScrollAnimation>
            </div>
          </div>

          <div className="row flex-column">
            <span className="text-center mt-4">
              <a href="https://www.instagram.com/saviraweddingdepok/?hl=id">
                <Ig height="15px" width="15px" className="footer-logo" />
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a href="https://www.facebook.com/savira.weddingg">
                <Fb height="15px" width="15px" className="footer-logo" />
              </a>
            </span>
            <p className="mx-auto text-white mt-4">
              ©2019 by SaviraWeddingDepok
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;
