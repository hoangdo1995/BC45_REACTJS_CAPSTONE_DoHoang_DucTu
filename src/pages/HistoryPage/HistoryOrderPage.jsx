import React from "react";

const HistoryOrderPage = (props) => {
  return <div>
    <h4 className="text-linear">+ Orders have been placed on 09 -19 -2020</h4>
    <div>
        <table className="table" id="history_order">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Img</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                <tr className="">
                    <td>1</td>
                    <td>
                        <img src="https://i.pravatar.cc?u=3" alt="...." height='50'/>
                    </td>
                    <td>Product 1</td>
                    <td>1000</td>
                    <td>1</td>
                    <td>1000</td>
                </tr>
            </tbody>
        </table>
    </div>
  </div>;
};

export default HistoryOrderPage;
