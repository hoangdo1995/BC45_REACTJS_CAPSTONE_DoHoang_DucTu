
import React from 'react'
import { useState } from 'react'
import CarouselHome from './CarouselHome'
import axios from 'axios'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'antd'
const Home = () => {

  const [arrShoes, setArrShoes] = useState([]);
  const getProductApi = async () => {
    const res = await axios({
      url: 'https://shop.cyberlearn.vn/api/Product',
      method: "GET",
      ResponseType: 'JSON'
    });
    setArrShoes(res.data.content);

  }

  useEffect(() => {
    getProductApi();
    console.log('arrShoes', arrShoes);
  }, [])

  return (
    <div className='container'>
      <CarouselHome />
      <div className='row mt-4'>
        {arrShoes.map((item) => {
          return <div className='col-4 mt-4' key={item.id}>
            <div className='card'>
              <img src={item.image} alt="" />
              <div className='card-body'>
                <h4>{item.name}</h4>
                <p>  <span className='text-danger'><i className='fs-4 ml-4' > {item.price}.000 vnd</i></span> </p>
                <NavLink className='btn btn-light' to={`/detail/${item.id}`}>
                  <Button><b>Buy now</b></Button>
                </NavLink> 
              </div>
            </div>
          </div>
        })} 
      </div>



    </div>
  )
}

export default Home