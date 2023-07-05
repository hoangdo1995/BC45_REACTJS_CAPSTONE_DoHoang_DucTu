import React, { useEffect } from "react";
import { http } from "../utils/config";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getLikeProduct } from "../redux/reducers/UserLoginReducer";
const ProductCard = (props) => {
    const dispatch = useDispatch();
    let [product,setProduct] = useState('');
    let [like,setLike] = useState('true');
    (async()=>{
        if(props.prod?.id && (product==='')){
            const product = await http.get(`/api/Product/getbyid?=${props.prod?.id}`);
            if(product.status === 200){
                setProduct(product?.data.content);
            }
        }     
    })();
    
  return <div className="col-xl-3 col-md-4 col-sm-6">
                <div style={{margin:10,boxShadow:'0px 5px 5px 0px rgba(7,6,6,0.5)'}} className="card border-0 position-relative">
                    <img src={product?.image} alt="..." width='100%'/>
                    <div className="card-body p-0 d-flex flex-column">
                        <h4 className="px-2 my-1">{product.name}</h4>
                        <p style={{width:'100%',color:'#CBC9C9',fontSize:14}} className="px-2 my-1">Description: {product.shortDescription}</p>
                        <div className="d-flex w-100">
                            <button className="w-50 border-0 p-2" style={{background:'#9DE167'}}>Buy Now</button>
                            <div className="text-center w-50 p-2 fw-bold" style={{background:'#DEDDDC'}}>
                                {product?.price}$
                            </div>
                        </div>
                    </div>
                    <div className="position-absolute" style={{top:10,right:10}}>
                        <img src={(like)?'../image/heart.png':'../image/heart_outline.png'} alt="..." style={{width:30,cursor:'pointer'}} onClick={()=>{
                            setLike(!like?true:false);
                            const unLikeApi = http.get(`/api/Users/unlike?productId=${product.id}`);
                            const getProductLikeAction = getLikeProduct();
                             dispatch(getProductLikeAction);
                            }}/>
                    </div>
                </div>
            </div>
};

export default ProductCard;
