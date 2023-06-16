import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='container d-flex justify-content-between p-4' style={{color:'white',background:'black'}}>
        <div className="logo">
          <NavLink to={''}>
            <img src="./image/logo.png" alt=""  />
          </NavLink>
        </div>
        <div className="nav fs-4">
          <NavLink to={'search'} className='text-decoration-none text-white '><i className='fa fa-search'></i>Search</NavLink>
          <NavLink to={'carts'} className='text-decoration-none text-white ms-3'><i className="fa fa-shopping-cart"></i>()</NavLink>
          <NavLink to={'login'} className='text-decoration-none text-white ms-3'>Login</NavLink>
          <NavLink to={'register'} className='text-decoration-none text-white ms-3'>Register</NavLink>
        </div>
    </div>
  )
}

export default Header