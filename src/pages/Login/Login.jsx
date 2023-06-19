import React from 'react'
import { Link } from 'react-router-dom'
import {history} from '../../index.js'
import { USER_LOGIN, getStorageJson,http,setStorageJson } from '../../templates/config.js'
import axios from 'axios'

const Login = () => {
  http.post('/api/Users/signin',{
    "email": "đă@gmail.com",
    "password": "123"
  });
  
  
  return (
    <div>
        login
    </div>
  )
}

export default Login