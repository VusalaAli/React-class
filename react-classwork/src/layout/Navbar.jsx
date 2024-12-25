import React from 'react'
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <nav>
        <ul>
        <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/products">Products</NavLink>
          </li>
          <li>
            <NavLink to="/productdetail">Product Detail</NavLink>
          </li>
          <li>
            <NavLink to="/editproduct">Edit Product</NavLink>
          </li>
          <li>
            <NavLink to="/addproduct">Add Product</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar