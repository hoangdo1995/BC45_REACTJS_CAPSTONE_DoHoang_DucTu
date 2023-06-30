import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { NavLink, useParams } from "react-router-dom";
import { addToCartAction } from "../../redux/cartReducer/cartReducer";
import { useDispatch } from "react-redux";

const Detail = () => {
  const dispatch = useDispatch();
  const [productShoes, setProductSheos] = useState({});
  const params = useParams();

  const getShoesApiDetail = async () => {
    const res = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${params.productId}`,
      method: "GET",
    });
    setProductSheos(res.data.content);
    console.log(params.productId);
  };

  useEffect(() => {
    //Call api
    getShoesApiDetail();
  }, [params.productId]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-4 mt-2">
          <img src={productShoes.image} className="w-75" alt="..." />
        </div>
        <div className="col-8 mt-2">
          <h3>{productShoes.name}</h3>
          <p>{productShoes.price}</p>
          <p>{productShoes.description}</p>
          <button
            className="btn btn-dark"
            onClick={() => {
              const prodCart={...productShoes,quantity:1}
              const action = addToCartAction(prodCart);
              dispatch(action);
            }}
          >
            ADD TO CART
          </button>
        </div>
      </div>
      <div className="row">
        {productShoes.relatedProducts?.map((item) => {
          return (
            <div className="col-4" key={item.id}>
              <div className="card">
                <img src={item.image} alt="..." />
                <div className="card-body">
                  <h3>{item.name}</h3>
                  <p>{item.price}</p>
                  <NavLink className="btn btn-dark" to={`/detail/${item.id}`}>
                    View detail
                  </NavLink>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Detail;
