import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setUserLogin,setUserLoginError } from '../redux/reducers/UserLoginReducer'
import { history } from '..'

const Header = () => {
  const dispatch = useDispatch();
  const user_login = useSelector(state=>state.UserLoginReducer);
  return (
    <div>
      <div className='container d-flex justify-content-between align-items-center p-4' style={{color:'white',background:'black'}}>
        <div className="logo">
          <NavLink to={''}>
            <img src="./image/logo.png" alt="..."  />
          </NavLink>
        </div>
        <div className="nav fs-5 d-flex justify-content-between align-items-center">
          <NavLink to={'search'} className={({isActive})=>(isActive?'text-warning':'text-white')} style={{textDecoration:'none'}}><i className='fa fa-search'></i>Search</NavLink>
          <NavLink to={'carts'} className={({isActive})=>(isActive?'text-warning ms-3':'text-white ms-3')} style={{textDecoration:'none'}}><i className="fa fa-shopping-cart"></i>()</NavLink>
          {(user_login.user_login?.name)?<NavLink to={'profile/history'} className={({isActive})=>(isActive?'text-warning ms-3':'text-white ms-3')} style={{textDecoration:'none',fontSize:14}}><img src={user_login.user_login?.avatar} style={{height:30}} className='position-relative mx-1'/>{user_login.user_login.name}</NavLink>:<NavLink to={'login'} className={({isActive})=>(isActive?'text-warning ms-3':'text-white ms-3')} style={{textDecoration:'none'}}>Login</NavLink>}
          {user_login.user_login?.accessToken?<button className='border-0 bg-transparent text-danger ms-2' onClick={async()=>{
              if(window.confirm('Bạn có muốn đăng xuất không?')){
                const action = setUserLogin(null);
              await dispatch(action);
              const action2 = setUserLoginError('');
              await dispatch(action2);
              history.push('/login');
              }
              else{
                history.push('/profile');
              }
          }}><i className="fa fa-power-off"></i></button>:<NavLink to={'register'} className={({isActive})=>(isActive?'text-warning ms-3':'text-white ms-3')} style={{textDecoration:'none'}}>Register</NavLink>}
        </div>
      </div>
      <div className='fs-4 fw-light p-3' id='navigate'>
        <NavLink to={''} className={({isActive})=>(isActive?'text-dark active':'text-secondary active')} style={{textDecoration:'none'}}>Home</NavLink>
        <NavLink to={'/product/men'} className={({isActive})=>(isActive?'text-dark ms-3':'text-secondary ms-3')} style={{textDecoration:'none'}}>Men</NavLink>
        <NavLink to={'/product/women'} className={({isActive})=>(isActive?'text-dark ms-3':'text-secondary ms-3')} style={{textDecoration:'none'}}>Women</NavLink>
        <NavLink to={'/product/kid'} className={({isActive})=>(isActive?'text-dark ms-3':'text-secondary ms-3')} style={{textDecoration:'none'}}>Kid</NavLink>
        <NavLink to={'/product/sport'} className={({isActive})=>(isActive?'text-dark ms-3':'text-secondary ms-3')} style={{textDecoration:'none'}}>Sport</NavLink>
      </div>
    </div>
  )
}

export default Header