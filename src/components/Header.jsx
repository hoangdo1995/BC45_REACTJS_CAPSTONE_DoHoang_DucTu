import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div className='container d-flex justify-content-between p-4' style={{color:'white',background:'black'}}>
        <div className="logo">
          <NavLink to={''}>
            <img src="./image/logo.png" alt=""  />
          </NavLink>
        </div>
        <div className="nav fs-5">
          <NavLink to={'search'} className={({isActive})=>(isActive?'text-warning':'text-white')} style={{textDecoration:'none'}}><i className='fa fa-search'></i>Search</NavLink>
          <NavLink to={'carts'} className={({isActive})=>(isActive?'text-warning ms-3':'text-white ms-3')} style={{textDecoration:'none'}}><i className="fa fa-shopping-cart"></i>()</NavLink>
          <NavLink to={'login'} className={({isActive})=>(isActive?'text-warning ms-3':'text-white ms-3')} style={{textDecoration:'none'}}>Login</NavLink>
          <NavLink to={'register'} className={({isActive})=>(isActive?'text-warning ms-3':'text-white ms-3')} style={{textDecoration:'none'}}>Register</NavLink>
        </div>
      </div>
      <div className='fs-4 fw-light p-3' id='navigate'>
        <NavLink to={''} className={({isActive})=>(isActive?'text-dark active':'text-secondary active')} active style={{textDecoration:'none'}}>Home</NavLink>
        <NavLink to={'/product/men'} className={({isActive})=>(isActive?'text-dark ms-3':'text-secondary ms-3')} style={{textDecoration:'none'}}>Men</NavLink>
        <NavLink to={'/product/women'} className={({isActive})=>(isActive?'text-dark ms-3':'text-secondary ms-3')} style={{textDecoration:'none'}}>Women</NavLink>
        <NavLink to={'/product/kid'} className={({isActive})=>(isActive?'text-dark ms-3':'text-secondary ms-3')} style={{textDecoration:'none'}}>Kid</NavLink>
        <NavLink to={'/product/sport'} className={({isActive})=>(isActive?'text-dark ms-3':'text-secondary ms-3')} style={{textDecoration:'none'}}>Sport</NavLink>
      </div>
    </div>
  )
}

export default Header