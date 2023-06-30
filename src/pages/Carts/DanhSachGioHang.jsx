import React from "react";
import { useSelector } from "react-redux";

export default function DanhSachGioHang(props) {
  const { cart } = useSelector((state) => state.cartReducer);
  return (
    <div>
      <h3>Oder product</h3>
      {cart.map((item, index) => {
        return (
          <div className="info_product d-flex mx-5 mt-3">
            <img src={item.image} alt="..." width={150} height={150} />
            <div className="info mx-5">
              <h5>{item.name}</h5>
              <p style={{ marginTop: "15px" }}>price: {item.price}$</p>
              <p style={{ marginTop: "-5px" }}>Mặt hàng này có sẵn</p>
              <div className="ammount mt-2">
                <button
                  className="btn btn-secondary"
                  style={{ margin: "0 10px 0 0" }}
                >
                  -
                </button>
                <span style={{ marginTop: "15px" }}>{item.quantity}</span>
                <button
                  className="btn btn-secondary"
                  style={{ margin: "0 0 0 10px" }}
                >
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
