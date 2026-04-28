import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="homepage">
      <div className="home">
        <div className="hero">
          <h1>Scooter sharing made simple</h1>
          <p>
            Scoot takes the hassle out of urban mobility. Our bikes are placed
            in convenient locations in each of our cities. Use our app to locate
            the nearest bike, unlock it with a tap, and you’re away!
          </p>
          <button>Get Scootin</button>
        </div>
      </div>
      <div className="container">
        <div className="cards">
          <img className="chiziq" src="/imgs/Group 11.png" alt="" />
          <div className="box">
            <img src="/imgs/Group 8.svg" alt="" />
            <h2>Locate with app</h2>
            <p>
              Use the app to find the nearest scooter to you. We are
              continuously placing scooters in the areas with most demand, so
              one should never be too far away.
            </p>
          </div>
          <div className="box">
            <img src="/imgs/Group 9.svg" alt="" />
            <h2>Pick your scooter</h2>
            <p>
              We show the most important info for the scooters closest to you.
              So you know how much charge they have left and can see roughly how
              much it will cost.
            </p>
          </div>
          <div className="box">
            <img src="/imgs/Group 10.svg" alt="" />
            <h2>Enjoy the ride</h2>
            <p>
              Scan the QR code and the bike will unlock. Retract the cable lock,
              put on a helmet, and you’re off! Always lock bikes away from
              walkways and accessibility ramps.
            </p>
          </div>
        </div>

        <section className="sec_1">
          <div className="sec_1txt">
            <h1>Easy to use riding telemetry</h1>
            <p>
              The Scoot app is available with riding telemetry. This means it
              can show you your average speed, how long you've been using the
              scooter, your traveling distance, and many more things all in an
              easy to use app.
            </p>
            <button>Learn More</button>
          </div>
          <img src="/imgs/Group 15.png" alt="" />
        </section>
        <section className="sec_2">
          <img src="/imgs/Group 14.png" alt="" />
          <div className="sec_2txt">
            <h1>Coming to a city near you</h1>
            <p>
              Scoot is available in 4 major cities so far. We’re expanding
              rapidly, so be sure to let us know if you want to see us in your
              hometown. We’re aiming to let our scooters loose on 23 cities over
              the coming year.
            </p>
            <button>Learn More</button>
          </div>
        </section>
        <section className="sec_1">
          <div className="sec_1txt">
            <h1>Zero hassle payments</h1>
            <p>
              Our payment is as easy as one two three. We accept most credit
              cards and debit cards. You can also link your PayPal account
              inside the app. Need to pay later? No worries! You can defer
              payment for up to a month.  
            </p>
            <button>Learn More</button>
          </div>
          <img src="/imgs/Group 18.png" alt="" />
        </section>
      </div>
    </div>
  );
}

export default Home;
