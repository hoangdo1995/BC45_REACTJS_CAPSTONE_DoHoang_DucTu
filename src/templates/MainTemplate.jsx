import React from 'react'
import ResponsiveItem from '../utils/Responsive'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'
import HeaderMobile from '../components/HeaderMobile'
import FooterMobile from '../components/FooterMobile'

const MainTemplate = () => {
  return (
    <div className='container-sm-fluid px-sm-0'>
        <ResponsiveItem component={Header} mobileComponent={HeaderMobile}/>
        <Outlet/>
        <ResponsiveItem component={Footer} mobileComponent={FooterMobile}/>
    </div>
  )
}

export default MainTemplate