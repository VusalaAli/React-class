import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <header style={{height:"72px"}}>
    <nav style={
      {position:"fixed",top:"0",left:"0",height:"72px"}
    }>
        <ul>
        <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/editproduct">Edit Product</NavLink>
          </li>
          <li>
            <NavLink to="/addproduct">Add Product</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar