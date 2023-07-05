import React from "react";
import DanhSachGioHang from "./DanhSachGioHang";
import { useDispatch, useSelector} from "react-redux";
import { http } from "../../utils/config";
import axios from "axios";
import { profileAction } from "../../redux/reducers/UserLoginReducer";


const Carts = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cartReducer);
  const {user_login} = useSelector(state=>state.UserLoginReducer);

  let tongSoLuong = cart.reduce((tsl, spGH, index) => {
    return (tsl += spGH.quantity);
  }, 0);
  let tongGia = cart.reduce((tGia, spGH, index) => {
    return (tGia += spGH.price*spGH.quantity);
  }, 0);
  
  return (
    
    <div className="container" style={{ width: "100%" }}>
      <div className="d-flex">
        <div style={{ width: "70%" }}>
          <DanhSachGioHang className="info mx-5" />
        </div>
        <div className="bill mx-5 ">
          <h3 className="text-center">Order bill</h3>
          <p>{tongSoLuong} sản phẩm</p>
          <p>Tổng: {tongGia} $</p>
          <p className="text-secondary">(Đã bao gồm thuế)</p>
          <hr />
          <input placeholder="Nhập mã khuyến mãi"></input>
          <button className="btn btn-secondary mt-3" onClick={async()=>{
            const orderDetail = cart.map(prod=>{
              return {
                "productId": prod.id,
                    "quantity": prod.quantity
              }
            });
            
            const res = await http.post('/api/Users/order',{
              "orderDetail": orderDetail,
              "email": user_login.email
            })
            const profile = profileAction();
          dispatch(profile);
          }}>
            Thanh toán<i className="fa fa-arrow"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Carts;
