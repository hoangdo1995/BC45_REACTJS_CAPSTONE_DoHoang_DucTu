import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  changeQuantityAction,
  delItemAction,
} from "../../redux/Reducer/cartReducer";

export default function DanhSachGioHang(props) {
  const { cart } = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h3>Oder product</h3>
      {cart.map((item, index) => {
        return (
          <div
            className="info_product d-flex mt-3"
            style={{ marginLeft: "58px" }}
          >
            <img src={item.image} alt="..." width={150} height={150} />
            <div
              className="info"
              style={{ marginLeft: "100px", width: "280px" }}
            >
              <h5>{item.name}</h5>
              <p style={{ marginTop: "15px" }}>price: {item.price}$</p>
              <p style={{ marginTop: "-15px" }}>Mặt hàng này có sẵn</p>
              <div className="ammount mt-2">
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    const itemquantity = {
                      id: item.id,
                      quantity: -1,
                    };
                    const action = changeQuantityAction(itemquantity);
                    dispatch(action);
                  }}
                  style={{ margin: "0 10px 0 0" }}
                >
                  -
                </button>
                <span style={{ marginTop: "15px" }}>{item.quantity}</span>
                <button
                  className="btn btn-secondary"
                  onClick={() => {
                    const itemquantity = {
                      id: item.id,
                      quantity: 1,
                    };
                    const action = changeQuantityAction(itemquantity);
                    dispatch(action);
                  }}
                  style={{ margin: "0 0 0 10px" }}
                >
                  +
                </button>
              </div>
            </div>
            <div style={{ width:"170px", paddingLeft:"50px"}}>
              <button
                className="btn btn-danger"
                onClick={() => {
                  const action = delItemAction(item.id);
                  dispatch(action);
                }}
              >
                <i className="fa fa-trash"></i>
              </button>
              <br />
              <p className="mt-5">Giá: <span style={{fontWeight:'700'}}>{item.quantity * item.price}</span></p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
