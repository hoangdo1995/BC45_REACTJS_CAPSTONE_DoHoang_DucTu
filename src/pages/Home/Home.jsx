
import React from 'react'
import { useState } from 'react'
import CarouselHome from './CarouselHome'
import axios from 'axios'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
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

      <div className='row'>
        {arrShoes.map((item) => {
          return <div className='col-4 mt-2' key={item.id}>
            <div className='card'>
              <img src={item.image} alt="" />
              <div className='card-body'>
                <h4>{item.name}</h4>
                <p>  Price : <span className='text-danger'> {item.price}$</span> </p>
                <NavLink className='btn btn-dark' to={`/detail/${item.id}`}> <b>Buy now</b> </NavLink>
              </div>
            </div>
          </div>
        })}
      </div>



    </div>
  )
}

export default Home