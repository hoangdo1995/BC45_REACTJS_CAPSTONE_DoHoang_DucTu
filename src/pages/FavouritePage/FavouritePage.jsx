import React, { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import { http } from "../../utils/config";
import { useDispatch, useSelector } from "react-redux";
import { getLikeProduct } from "../../redux/reducers/UserLoginReducer";

const FavouritePage = () => {
    const dispatch = useDispatch();
    const {likeProduct} = useSelector(state=>state.UserLoginReducer);
    let [likeProducts,setLikeProducts] = useState('');
    useEffect(()=>{
            const getProductLikeAction = getLikeProduct();
            dispatch(getProductLikeAction);
            setLikeProducts(likeProduct);
    },[likeProducts])
  return <div className="">
        <div className="row">
            {likeProduct?likeProduct.map((item,index)=>{
                return <ProductCard prod={item} key={index}/>
            }):''}
        </div>
  </div>;
};

export default FavouritePage;
