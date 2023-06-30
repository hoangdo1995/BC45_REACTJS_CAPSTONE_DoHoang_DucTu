import React from "react";
import DanhSachGioHang from "./DanhSachGioHang";

const Carts = () => {
  return (
    <div className="container" style={{ width: "100%" }}>
      <div className="d-flex">
      <div style={{width:'70%'}}><DanhSachGioHang className="info mx-5"/></div>
        <div className="bill mx-5 ">
          <h3 className="text-center">Order bill</h3>
          <p>2 sản phẩm</p>
          <p>Tổng:1000$ </p>
          <p className="text-secondary">(Đã bao gồm thuế)</p>
          <hr />
          <input placeholder="Nhập mã khuyến mãi"></input>
          <button className="btn btn-secondary mt-3">
            Thanh toán<i className="fa fa-arrow"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carts;
