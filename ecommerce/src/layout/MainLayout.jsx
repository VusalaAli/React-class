import React from 'react'
import MainNavbar from './MainNavbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
const MainLayout = () => {
  return (
    <>
      <MainNavbar/>
      <Outlet/>
      <Footer/>
    </>
  )
}

export default MainLayout
