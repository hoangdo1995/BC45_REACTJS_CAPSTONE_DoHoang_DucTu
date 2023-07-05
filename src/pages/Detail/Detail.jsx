import { Button } from 'antd';
import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom'
import { addToCartAction } from "../../redux/Reducer/cartReducer";
import { useDispatch } from "react-redux";
const Detail = () => {
  const [productShoes, setProductSheos] = useState({});
  const params = useParams();
  const dispatch = useDispatch();
  const getShoesApiDetail = async () => {
    const res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.productId}`,
      method: 'GET',
    });
    setProductSheos(res.data.content);
    console.log(params.productId);
  }
  useEffect(() => {
    getShoesApiDetail()
  }, [params.productId])

  const [number, setNumber] = useState(1)

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-4 mt-2' >
          <img src={productShoes.image} className='w-75' alt="..." />
        </div>
        <div className='col-8 mt-2'>
          <h3>{productShoes.name}</h3>
          <p className='text-danger'> <b className='fs-4'>{productShoes.price}.000 vnd</b></p>
          <p> <i>{productShoes.description}</i></p>
          <h5 className='text-sucess'>Available size</h5>

          {productShoes.size?.map((item, index) => {
            return <div key={index} className='d-inline mx-2' >
              <button className='ml-5 text-dark border btn btn-light'> {item} </button>
            </div>
          })}
          <div className='mt-2'>
            <button className=' mt-2 btn  btn-warning mx-2' onClick={() => {
              setNumber(number - 1)
            }} >-</button>
            <span className='text-dark fs-5 mt-2'>{number}</span>
            <button className=' mt-2 btn  btn-warning mx-2' onClick={() => {
              setNumber(number + 1)
            }}>+</button>
            <button
            className="btn btn-danger fs-6"
            onClick={() => {
              const prodCart={...productShoes,quantity:number}
              const action = addToCartAction(prodCart);
              dispatch(action);
            }}
          >
            ADD TO CART
          </button>
          </div>
        </div>


      </div>
      <div className='row'>
        {productShoes.relatedProducts?.map((item) => {
          return <div className='col-4' key={item.id}>
            <div className='card'>
              <img src={item.image} alt='...' />
              <div className='card-body'>
                <h3>{item.name}</h3>
                <p>  <span className='text-danger'><i className='fs-4 ml-4' > {item.price}.000 vnd</i></span> </p>
                <NavLink className='btn btn-light' to={`/detail/${item.id}`}>
                  <Button><b>View detail</b></Button>
                </NavLink> 
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}
export default Detail
