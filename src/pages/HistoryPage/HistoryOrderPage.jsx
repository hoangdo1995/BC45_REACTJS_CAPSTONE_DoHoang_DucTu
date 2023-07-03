import React from "react";
import HistoryCard from "../../components/HistoryCard";
import { useSelector } from "react-redux";

const HistoryOrderPage = (props) => {
    const historyOrders = useSelector(state=>state.UserLoginReducer.user_login?.ordersHistory);
  return <div>
        {historyOrders?.map((order,index)=>{
          return <HistoryCard orderDetail = {order} key={index}/>
        })}
        
  </div>;
};

export default HistoryOrderPage;
