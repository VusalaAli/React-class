import React from "react";
import "./navbar.css";
const Navbar = () => {
  return (
    <>
      <nav>
        <div className="container">
          <div className="nav">
            <h1 className="logo">Start Bootstrap</h1>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Contact</li>
              <li>Services</li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
