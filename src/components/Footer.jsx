import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='footer' id=''>
      <div className='row px-5 py-3'>
        <div className="col-4  d-flex flex-column px-5">
          <h5 className='fw-bold'>GET HELP</h5>
          <Link className='text-decoration-none text-dark fw-semibold'>Home</Link>
          <Link className='text-decoration-none text-dark fw-semibold'>Nike</Link>
          <Link className='text-decoration-none text-dark fw-semibold'>Adidas</Link>
          <Link className='text-decoration-none text-dark fw-semibold'>Contact</Link>
        </div>
        <div className="col-4 d-flex flex-column border-start border-2 px-5">
          <h5 className='fw-bold'>SUPPORT</h5>
          <Link className='text-decoration-none text-dark fw-semibold'>About</Link>
          <Link className='text-decoration-none text-dark fw-semibold'>Contact</Link>
          <Link className='text-decoration-none text-dark fw-semibold'>Help</Link>
          <Link className='text-decoration-none text-dark fw-semibold'>Phone</Link>
        </div>
        <div className="col-4 d-flex flex-column border-start border-2 px-5">
          <h5 className='fw-bold'>REGISTER</h5>
          <Link className='text-decoration-none text-dark fw-semibold'>Register</Link>
          <Link className='text-decoration-none text-dark fw-semibold'>Login</Link>
        </div>
      </div>
      <div className='d-flex justify-content-center align-content-center p-3' style={{ backgroundColor: '#D9D9D9' }}>
        <p className='h-100 mb-0 fs-5'>&copy; 2020 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải</p>
      </div>
    </div>
  )
}

export default Footer