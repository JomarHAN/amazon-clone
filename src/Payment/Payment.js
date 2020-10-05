import React from "react";
import { Link } from "react-router-dom";
import CheckProduct from "../CheckCart/CheckProduct/CheckProduct";
import { useStateValue } from "../ContextAPI/StateProvider";
import "./Payment.css";

function Payment() {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Check Cart (<Link to="/checkcart">{basket?.length} items</Link>)
        </h1>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 Main St</p>
            <p>Atlanta, GA</p>
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and Delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
