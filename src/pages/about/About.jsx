import React from "react";
import "./About.css";

function About() {
  return (
    <div className="aboutPage">
      <div className="bgabout">
        <h1 className="eych">About</h1>
      </div>  
      <div className="container">
        <section className="s_1">
          <div className="s_1txt">
            <h1>Mobility for the digital era</h1>
            <p>
              The Scoot app is available with riding telemetry. This means it
              can show you your average speed, how long you've been using the
              scooter, your traveling distance, and many more things all in an
              easy to use app.
            </p>
            <button>Learn More</button>
          </div>
          <img src="/imgs/Group 15.svg" alt="" />
        </section>

        <section className="s_1">
          <img src="/imgs/Group 14.svg" alt="" />
          <div className="s_1txt">
            <h1>Easy to use riding telemetry</h1>
            <p>
              The Scoot app is available with riding telemetry. This means it
              can show you your average speed, how long you've been using the
              scooter, your traveling distance, and many more things all in an
              easy to use app.
            </p>
            <button>Learn More</button>
          </div>
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
                transportation forward. Our fully electric scooters are a joy to
                ride!
              </p>
            </div>
            <div className="valu_box">
              <img src="/imgs/Bitmap Copy (1).svg" alt="" />
              <img className="raqam" src="/imgs/Group 10 (1).svg" alt="" />
              <h2>Our integrity </h2>
              <p>
                We are fully committed to deliver a great yet safe, sustainable
                micro-mobility experience in every city we serve.
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

        <section className="faqs">
          <h1 className="faqqq">FAQs</h1>
          <div className="faqs_cards">
            <div className="faqs_box">
              <h1>How it works</h1>
              <div className="faqs_txt_box">
                <div className="faqs_txt">
                  <div className="txt_1">
                    <h2>How do I download the app?</h2>
                    <img src="/imgs/Path 3.svg" alt="" />
                  </div>
                  <div className="txt_2">
                    <p>
                      To download the Scoot app, you can search “Scoot” in both
                      the App and Google Play stores. An even simpler way to do
                      it would be to click the relevant link at the bottom of
                      this page and you’ll be re-directed to the correct page.
                    </p>
                  </div>
                </div>
                <div className="faqs_txt">
                  <div className="txt_1">
                    <h2>Can I find a nearby Scoots?</h2>
                    <img src="/imgs/Path 3 (1).svg" alt="" />
                  </div>
                </div>
                <div className="faqs_txt">
                  <div className="txt_1">
                    <h2>Do I need a license to ride?</h2>
                    <img src="/imgs/Path 3 (1).svg" alt="" />
                  </div>
                </div>
              </div>
            </div>

            <div className="faqs_box">
              <h1>Safe driving</h1>
              <div className="faqs_txt_box">
                <div className="faqs_txt">
                  <div className="txt_1">
                    <h2>Should I wear a helmet?</h2>
                    <img src="/imgs/Path 3.svg" alt="" />
                  </div>
                  <div className="txt_2">
                    <p>
                      Yes, please do! All cities have different laws. But we
                      strongly strongly strongly recommend always wearing a
                      helmet regardless of the local laws. We like you and we
                      want you to be as safe as possible while Scooting.
                    </p>
                  </div>
                </div>
                <div className="faqs_txt">
                  <div className="txt_1">
                    <h2>How about the rules & regulations?</h2>
                    <img src="/imgs/Path 3 (1).svg" alt="" />
                  </div>
                </div>
                <div className="faqs_txt">
                  <div className="txt_1">
                    <h2>What if I damage my Scoot?</h2>
                    <img src="/imgs/Path 3 (1).svg" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;
