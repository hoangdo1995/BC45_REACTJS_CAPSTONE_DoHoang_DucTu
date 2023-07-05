import React from 'react'
import { useState } from 'react'
import CarouselHome from './CarouselHome'
import axios from 'axios'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'antd'
import { addToCartAction } from "../../redux/Reducer/cartReducer";
import { useDispatch } from "react-redux";
import { http } from '../../utils/config'
import { getLikeProduct } from '../../redux/reducers/UserLoginReducer'
import ProductCardHome from '../../components/ProductCardHome'

const Home = () => {
  const dispatch = useDispatch();
  const [arrShoes, setArrShoes] = useState([]);
  let [like,setLike] = useState('true');
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
  }, []);

  return (
    <div className="container">
      <CarouselHome />

      <div className="row">
        {arrShoes.map((item) => {
          return (
            <div className="col-4 mt-2 posi" key={item.id}>
              <ProductCardHome item={item}/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
