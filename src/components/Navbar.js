import React from "react";
import $ from "jquery";
import logo from "../assets/logo.png";
import "../css/navbar.css";
import { ReactComponent as Fb } from "../assets/facebook-logo.svg";
import { ReactComponent as Ig } from "../assets/instagram-logo.svg";

const Navbar = () => {
  $(document).ready(function() {
    $("#toggle").click(function() {
      $(this).toggleClass("on");
      $("#resize").toggleClass("active");
    });
  });
  return (
    <section>
      <nav>
        <span id="brand">
          <img src={logo} alt="none" />
        </span>
        <span id="brand-name">
          <div className="name">SaviraWeddingDepok</div>
          <div className="place">WO & MUA Depok || Bogor || Jakarta</div>
        </span>
        <ul id="menu">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Booking">Booking</a>
          </li>
          <li>
            <a href="#Event">Event</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <li>
            <a href="#Plans&Pricing">Plans & Pricing</a>
          </li>
          <li className="logo-nav">
            <a href="https://www.instagram.com/saviraweddingdepok/?hl=id">
              <Ig height="15px" width="15px" className="footer-logo" />
            </a>
          </li>
          <li>
            <a href="https://www.facebook.com/savira.weddingg">
              <Fb height="15px" width="15px" className="footer-logo" />
            </a>
          </li>
        </ul>

        <div id="toggle">
          <div className="span" id="one" />
          <div className="span" id="two" />
          <div className="span" id="three" />
        </div>
      </nav>

      <div id="resize">
        <ul id="menu">
          <li>
            <a href="#Home">Home</a>
          </li>
          <li>
            <a href="#Booking">Booking</a>
          </li>
          <li>
            <a href="#Event">Event</a>
          </li>
          <li>
            <a href="#Contact">Contact</a>
          </li>
          <li>
            <a href="#Plans&Pricing">Plans & Pricing</a>
          </li>
          <li>
            <a href="https://www.instagram.com/saviraweddingdepok/?hl=id">
              <Ig height="15px" width="15px" className="footer-logo" />
            </a>
            &nbsp;&nbsp;&nbsp;
            <a href="https://www.facebook.com/savira.weddingg">
              <Fb height="15px" width="15px" className="footer-logo" />
            </a>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Navbar;
