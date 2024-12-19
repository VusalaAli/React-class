import React from "react";
import "./navbar.css";
const Navbar = () => {
  const myStyle = {display: 'flex',
  gap: '2rem'
  
}
  return (
    <>
      <nav style={{backgroundColor: "#212529"}}>
        <div className="container">
          <div className="nav">
            <h1 className="logo">Start Bootstrap</h1>
            <ul style={myStyle}>
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
