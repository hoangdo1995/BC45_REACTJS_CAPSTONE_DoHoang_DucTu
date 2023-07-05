import React, { useEffect, useRef, useState } from "react";
import { NavLink, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCartAction } from "../../redux/Reducer/cartReducer";
import axios from "axios";

export default function Search(props) {
  const [searchParams, setSearchParams] = useSearchParams();
  const [arrProduct, setArrProduct] = useState([]);
  const dispatch = useDispatch();

  const keywordRef = useRef("");

  const handleChange = (e) => {
    const { value, id } = e.target;
    keywordRef.current = value;
  };

  useEffect(() => {
    (async () => {
      let keyword = "";
      if (searchParams.get("keyword") != null) {
        keyword = searchParams.get("keyword");
      }

      if (keyword !== "") {
        try {
          const result = await axios({
            url: "https://shop.cyberlearn.vn/api/Product?keyword=" + keyword,
            method: "GET",
          });

          setArrProduct(result.data.content);
        } catch (error) {
          setArrProduct([]);
          alert("Không tìm thấy sản phẩm");
        }
      }
    })();
  }, [keywordRef.current]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchParams({ keyword: keywordRef.current });
  };
  return (
    <div className="container">
      <form className="frm" onSubmit={handleSubmit}>
        <h3>Search</h3>
        <div className="form-group">
          <div className="input-group">
            <input
              className="input-group-prepend form-control"
              id="keyword"
              name="keyword"
              onChange={handleChange}
            />
            <button className="btn btn-success" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
      <div className="result mt-2">
        <div className="row">
          {arrProduct.map((item, index) => {
            return (
              <div className="col-4" key={index}>
                <div className="card">
                  <img src={item.image} alt="" />
                  <div className="card-body">
                    <h4>{item.name}</h4>
                    <p>
                      Price : <span className="text-danger">{item.price}$</span>
                    </p>
                    <NavLink
                      className="btn btn-success"
                      to={`/detail/${item.id}`}
                    >
                      <b>View Detail</b>{" "}
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
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
