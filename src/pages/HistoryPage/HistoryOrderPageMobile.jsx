import React from "react";
import HistoryCardMobile from "../../components/HistoryCardMobile";
import { useSelector } from "react-redux";

const HistoryOrderPageMobile = () => {
    const historyOrders = useSelector(state=>state.UserLoginReducer.user_login?.ordersHistory);
    return <div className="">
          {historyOrders?.map((order,index)=>{
            return <HistoryCardMobile orderDetail = {order} key={index}/>
          })}
          
    </div>;
};

export default HistoryOrderPageMobile;
