import React from "react";


const HistoryCardMobile = (props) => {
    const order = props.orderDetail;
    const date = new Date(order.date);
  return<div className="">
    <h4 className="text-linear">+ Orders have been placed on {date.getMonth()+1}-{date.getDate()}-{date.getFullYear()}</h4>
    <table className="table" id="history_order">
    <thead>
        <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
        </tr>
    </thead>
    <tbody>
        {(order?.orderDetail.map((prod,index)=>{
            return <tr className="" key={index}>
            <td>{order.id}</td>
            <td>{order?.orderDetail[index].name}</td>
            <td>{order?.orderDetail[index].price}</td>
            <td>{order?.orderDetail[index].quantity}</td>
            <td>{order?.orderDetail[index].price*order?.orderDetail[index].quantity}$</td>
        </tr>
      }))}
  </tbody>
</table>
</div>
};

export default HistoryCardMobile;
