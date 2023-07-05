import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { http } from "../utils/config";
import { getLikeProduct } from "../redux/reducers/UserLoginReducer";
import { addToCartAction } from "../redux/Reducer/cartReducer";
import { useDispatch, useSelector } from "react-redux";

const ProductCardHome = (props) => {
    const dispatch = useDispatch();
    const item = props.item;
    let [like,setLike] = useState(false);
    useEffect(()=>{
        const getProductLikeAction = getLikeProduct();
        dispatch(getProductLikeAction);
    },[like]);
  return <div className="card">
  <img src={item.image} alt="" />
  <div className="card-body">
    <h4>{item.name}</h4>
    <p>
      Price : <span className="text-danger">
        {item.price}$
      </span>
    </p>
    <NavLink className="btn btn-success" to={`/detail/${item.id}`}>
     
      <b>View Detail</b>
    </NavLink>
    <button
      className="btn btn-danger mx-3"
      onClick={() => {
        const prodCart = { ...item, quantity: 1 };
        const action = addToCartAction(prodCart);
        dispatch(action);
      }}
    >
     <b>BUY !</b> 
    </button>
  </div>
  <div className="position-absolute" style={{top:10,right:10,zIndex:99}}>
          <img src={(like)?'../image/heart.png':'../image/heart_outline.png'} alt='...' onClick={()=>{
              setLike(!like?true:false);
              if(!like){
                const likeApi = http.get(`/api/Users/like?productId=${item.id}`);
              const getProductLikeAction = getLikeProduct();
               dispatch(getProductLikeAction);
              }
              else{
                const unLikeApi = http.get(`/api/Users/unlike?productId=${item.id}`);
              const getProductLikeAction = getLikeProduct();
               dispatch(getProductLikeAction);
              }
              }}/>
</div>
</div>

};

export default ProductCardHome;
