import React from "react";

export const DanhSachGioHang = () => {
  

  return (
    <div className="container mt-4" style={{width:'100%'}}>
      <h3>Oder product</h3>
      <p>Tổng cộng: 1000$</p>
      <div className="d-flex">
        <div className="info_product d-flex mx-5 " style={{width:'70%'}}>
          <img src="./image/slide1.webp" alt="..." width={150} height={150} />
          <div className="info mx-5" >
            <h5>Giày NMD S1</h5>
            <p style={{marginTop:'15px'}}>price: 1000$</p>
            <p style={{marginTop:'-5px'}}>Mặt hàng này có sẵn</p>
            <div className="ammount mt-2">
            <button className="btn btn-secondary" style={{ margin: "0 10px 0 0" }}>
              -
            </button>
            <span style={{marginTop:'15px'}}>1</span>
            <button className="btn btn-secondary" style={{ margin: "0 0 0 10px" }}>
              +
            </button>
            </div>
          </div>
        </div>
        
        <div className="bill mx-5 " >
          <h3 className="text-center">Order bill</h3>
          <p>2 sản phẩm</p>
          <p>Tổng: 1000$</p>
          <p className="text-secondary">(Đã bao gồm thuế)</p>
          <hr/>
          <input  placeholder="Nhập mã khuyến mãi"></input>
          <button className="btn btn-secondary mt-3">Thanh toán<i className="fa fa-arrow"></i></button>
        </div>
      </div>
    </div>
  );
};
