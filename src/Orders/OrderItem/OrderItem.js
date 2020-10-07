import React from "react";
import "./OrderItem.css";
import moment from "moment";
import CheckProduct from "../../CheckCart/CheckProduct/CheckProduct";
import CurrencyFormat from "react-currency-format";

function OrderItem({ order }) {
  return (
    <div className="orderitem">
      <h2>Order Item here</h2>
      <p>{moment.unix(order.data.created).format("MMMM Do YYYY, h:mma")}</p>
      <p className="orderitem__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item) => (
        <CheckProduct
          id={item.id}
          title={item.title}
          price={item.price}
          rating={item.rating}
          image={item.image}
          hideButton
        />
      ))}
      <CurrencyFormat
        renderText={(value) => (
          <h3 className="orderitem__total">Total Order: {value}</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </div>
  );
}

export default OrderItem;
