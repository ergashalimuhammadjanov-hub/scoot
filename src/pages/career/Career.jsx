import React from "react";
import "./Career.css";
function Career() {
  return (
    <>
      <div className="careersal">
        <div className="careersalbg">
          <h1 className="eych">Careers</h1>
        </div>
        <div className="container">
          <section className="s_1">
            <div className="s_1txt">
              <h1>Care to join our mission?</h1>
              <p>
                We’re always looking for ambitious individuals to help us on our
                journey. If you’re passionate about our mission to provide
                clean, accessible transport to improve urban living we want to
                hear from you!
              </p>
              <button>Learn More</button>
            </div>
            <img src="/imgs/Group 16.svg" alt="" />
          </section>

          <section className="values">
            <h1 className="val">Our values</h1>
            <div className="value_cards">
              <div className="valu_box">
                <img src="/imgs/Bitmap Copy.svg" alt="" />
                <img className="raqam" src="/imgs/Group 31.svg" alt="" />
                <h2>Our tech</h2>
                <p>
                  We’re using cutting edge technology to drive accessible urban
                  transportation forward. Our fully electric scooters are a joy
                  to ride!
                </p>
              </div>
              <div className="valu_box">
                <img src="/imgs/Bitmap Copy (1).svg" alt="" />
                <img className="raqam" src="/imgs/Group 10 (1).svg" alt="" />
                <h2>Our integrity </h2>
                <p>
                  We are fully committed to deliver a great yet safe,
                  sustainable micro-mobility experience in every city we serve.
                </p>
              </div>
              <div className="valu_box">
                <img src="/imgs/Bitmap Copy (2).svg" alt="" />
                <img className="raqam" src="/imgs/Group 30.svg" alt="" />
                <h2>Our community</h2>
                <p>
                  We support every community we serve. All workers are paid a
                  living wage based on their location and are Scoot employees.
                </p>
              </div>
            </div>
          </section>

          <section class="jobs">
            <div class="container">
              <div class="job-card">
                <div class="job-info">
                  <h3>General Manager</h3>
                  <p>Jakarta, Indonesia</p>
                </div>
                <button class="apply-btn">Apply</button>
              </div>

              <div class="job-card">
                <div class="job-info">
                  <h3>UI/UX Designer</h3>
                  <p>Yokohama, Japan</p>
                </div>
                <button class="apply-btn">Apply</button>
              </div>

              <div class="job-card">
                <div class="job-info">
                  <h3>Blog Content Copywriter</h3>
                  <p>New York, United States</p>
                </div>
                <button class="apply-btn">Apply</button>
              </div>

              <div class="job-card">
                <div class="job-info">
                  <h3>Graphic Designer</h3>
                  <p>New York, United States</p>
                </div>
                <button class="apply-btn">Apply</button>
              </div>

              <div class="job-card">
                <div class="job-info">
                  <h3>Fleet Supervisor</h3>
                  <p>Jakarta, Indonesia</p>
                </div>
                <button class="apply-btn">Apply</button>
              </div>

              <div class="job-card">
                <div class="job-info">
                  <h3>UX Analyst</h3>
                  <p>London, United Kingdom</p>
                </div>
                <button class="apply-btn">Apply</button>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Career;
