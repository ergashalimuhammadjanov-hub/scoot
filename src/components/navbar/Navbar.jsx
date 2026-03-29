import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <div className="container">
        <div className="log">
          <img src="/imgs/vite.svg" alt="" />
          <ul>
            <li>
              <NavLink className="li" to={"/"}>Home</NavLink>
              <NavLink className="li" to={"/about"}>About</NavLink>
              <NavLink className="li" to={"/career"}>Careers</NavLink>
            </li>
          </ul>
        </div>
        <button>Get Scootin</button>
      </div>
    </nav>
  );
}

export default Navbar;
