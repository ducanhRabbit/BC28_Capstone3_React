import React from "react";
import moment from "moment";

export default function OrderHistory(props) {
  const { userLogin } = props ;
  return (
    <div className="orderHistory">
      {userLogin?.ordersHistory?.map((order, index) => {
        return (
          <div key={index}>
            <p>
              + Orders have been placed on{" "}
              {moment(order.date).format("DD/MM/YYYY")}
            </p>
            <table className="table">
              <thead className="text-center">
                <tr>
                  <th>id</th>
                  <th>image</th>
                  <th>name</th>
                  <th>price</th>
                  <th>quantity</th>
                  <th>total</th>
                </tr>
              </thead>
              <tbody className="align-middle text-center">
                {order.orderDetail?.map((detail, index) => {
                  return (
                    <tr key={index}>
                      <td>{order.id}</td>
                      <td>
                        <img
                          src={detail.image}
                          alt="shoe"
                          width={85}
                          height={56}
                        />
                      </td>
                      <td>{detail.name}</td>
                      <td>{detail.price}</td>
                      <td>
                        <span>{detail.quantity}</span>
                      </td>
                      <td>{detail.quantity * detail.price}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
}
