import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { setUserLogin,setUserLoginError } from '../redux/reducers/UserLoginReducer'
import { history } from '..'

const HeaderMobile = () => {
  const dispatch = useDispatch();
  const user_login = useSelector(state=>state.UserLoginReducer);
  const carts = useSelector(state=>state.cartReducer);
  
  return (
    <div className='position-relative'>
      <div className='container d-flex justify-content-between align-items-center p-4 pe-2' style={{color:'white',background:'black'}}>
        <div className="logo">
          <NavLink to={''}>
            <img src="../image/logo.png" alt="..."  />
          </NavLink>
        </div>
        <div className="nav fs-6 d-flex justify-content-between align-items-center">
        {(user_login.user_login?.name)?<NavLink to={'profile/history'} className={({isActive})=>(isActive?'text-warning ms-3':'text-white ms-3')} style={{textDecoration:'none',fontSize:14}}><img src={user_login.user_login?.avatar} style={{height:30}} className='position-relative mx-1'/>{user_login.user_login.name}</NavLink>:<NavLink to={'login'} className={({isActive})=>(isActive?'text-warning ms-3':'text-white ms-3')} style={{textDecoration:'none'}}>Login</NavLink>}
        <button className='border-0 ms-4 me-0' onClick={()=>{
          document.querySelector('#menu_popup').classList.toggle('hidden');
        }}><i class="fa fa-align-justify"></i></button>
        </div>
      </div>
      <div className='fs-5 fw-light p-3 container' id='navigate'>
        <NavLink to={''} className={({isActive})=>(isActive?'text-dark active':'text-secondary active')} style={{textDecoration:'none'}}>Home</NavLink>
        <NavLink to={'/product/men'} className={({isActive})=>(isActive?'text-dark ms-3':'text-secondary ms-3')} style={{textDecoration:'none'}}>Men</NavLink>
        <NavLink to={'/product/women'} className={({isActive})=>(isActive?'text-dark ms-3':'text-secondary ms-3')} style={{textDecoration:'none'}}>Women</NavLink>
        <NavLink to={'/product/kid'} className={({isActive})=>(isActive?'text-dark ms-3':'text-secondary ms-3')} style={{textDecoration:'none'}}>Kid</NavLink>
        <NavLink to={'/product/sport'} className={({isActive})=>(isActive?'text-dark ms-3':'text-secondary ms-3')} style={{textDecoration:'none'}}>Sport</NavLink>
      </div>
      <div className='popup_menu d-flex flex-column align-items-start border px-3 py-3 hidden' style={{position:'absolute',top:60,right:30,background:'#fff',boxShadow:'0px 5px 5px 0px rgba(7,6,6,0.5)',transition:'all .5s'}} id='menu_popup'>
          <NavLink to={'search'} className={({isActive})=>(isActive?'text-warning my-2':'text-dark my-2')} style={{textDecoration:'none'}}>Search <i className='fa fa-search'></i></NavLink>
          <NavLink to={'carts'} className={({isActive})=>(isActive?'text-warning my-2':'text-dark my-2')} style={{textDecoration:'none'}}>Cart <i className="fa fa-shopping-cart"></i>({carts?.cart.length})</NavLink>
          
          {user_login.user_login?.accessToken?<button className='border-0 bg-transparent text-danger px-0 my-2' onClick={async()=>{
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
          }}>Logout</button>:<NavLink to={'register'} className={({isActive})=>(isActive?'text-warning my-2':'text-white my-2')} style={{textDecoration:'none'}}>Register</NavLink>}
      </div>
    </div>
  );
};

export default HeaderMobile;
