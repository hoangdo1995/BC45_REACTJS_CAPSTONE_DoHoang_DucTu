import React from 'react'
import { Link } from 'react-router-dom'

const FooterMobile = () => {
  return (
    <div className='footer' id=''>
      <div className='row px-5 py-3'>
        <div className="col-6 d-flex flex-column align-items-center px-3 pb-2 mt-2">
          <h5 className='fw-bold'>GET HELP</h5>
          <Link className='text-decoration-none text-dark fw-semibold'>Home</Link>
          <Link className='text-decoration-none text-dark fw-semibold'>Nike</Link>
          <Link className='text-decoration-none text-dark fw-semibold'>Adidas</Link>
          <Link className='text-decoration-none text-dark fw-semibold'>Contact</Link>
        </div>
        <div className="col-4 d-flex flex-column align-items-center px-3 mt-2">
          <h5 className='fw-bold'>SUPPORT</h5>
          <Link className='text-decoration-none text-dark fw-semibold'>About</Link>
          <Link className='text-decoration-none text-dark fw-semibold'>Contact</Link>
          <Link className='text-decoration-none text-dark fw-semibold'>Help</Link>
          <Link className='text-decoration-none text-dark fw-semibold'>Phone</Link>
        </div>
        <div className="col-12 d-flex flex-column align-items-center px-5 mt-2">
          <h5 className='fw-bold'>REGISTER</h5>
          <Link className='text-decoration-none text-dark fw-semibold'>Register</Link>
          <Link className='text-decoration-none text-dark fw-semibold'>Login</Link>
        </div>
      </div>
      <div className='d-flex justify-content-center align-content-center p-3 container container-sm-fluid' style={{ backgroundColor: '#D9D9D9' }}>
        <p className='h-100 mb-0 fs-6'>&copy; 2020 Cybersoft All Rights Reserved | Design Theme by Trương Tấn Khải</p>
      </div>
    </div>
  )
}

export default FooterMobile