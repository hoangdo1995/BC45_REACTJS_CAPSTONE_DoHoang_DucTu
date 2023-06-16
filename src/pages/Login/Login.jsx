import React from 'react'
import { Link } from 'react-router-dom'
import { customNavigate } from '../..'

const Login = () => {
  return (
    <div>
      <Link className='btn btn-success' onClick={()=>{
        customNavigate.push('');
        console.log('home')
      }}>Link</Link>
    </div>
  )
}

export default Login