import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="foot_start">
          <h1>Sign up and Scoot off today</h1>
          <div className="social">
            <img src="./imgs/Group 28.svg" alt="" />
            <img src="./imgs/Group 28 Copy.svg" alt="" />
          </div>
        </div>
      </div>
      <div className="foot_end">
        <div className="container">
          <div className="foot_logo">
            <img src="./imgs/scoot.svg" alt="" />
            <ul>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Location</a>
              </li>
              <li>
                <a href="">Careers</a>
              </li>
            </ul>
          </div>
          <div className="foot_soc">
            <img src="./imgs/Path.svg" alt="" />
            <img src="./imgs/Path (1).svg" alt="" />
            <img src="./imgs/Shape.svg" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
