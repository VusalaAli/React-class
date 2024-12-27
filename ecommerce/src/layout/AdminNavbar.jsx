import React from 'react'
import { NavLink } from 'react-router-dom'
const AdminNavbar = () => {
  return (
    <>
    <nav>
        <ul>
          <li>
            <NavLink to="/admin">Products</NavLink>
          </li>
          <li>
            <NavLink to="/admin/addProduct">Add Products</NavLink>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default AdminNavbar