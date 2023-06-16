import React from 'react'
import ResponsiveItem from '../utils/Responsive'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Outlet } from 'react-router-dom'

const MainTemplate = () => {
  return (
    <div className='container'>
        <ResponsiveItem component={Header} mobileComponent={Header}/>
        <Outlet/>
        <ResponsiveItem component={Footer} mobileComponent={Footer}/>
    </div>
  )
}

export default MainTemplate