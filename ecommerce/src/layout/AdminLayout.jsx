import React from 'react'
import AdminNavbar from './AdminNavbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'

const AdminLayout = () => {
  return (
    <>
     <AdminNavbar/>
     <Outlet/>
     <Footer/> 
    </>
  )
}

export default AdminLayout
