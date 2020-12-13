import React from "react";
import { useStateValue } from "../ContextAPI/StateProvider";
import "./CheckCart.css";
import CheckProduct from "./CheckProduct/CheckProduct";
import Subtotal from "./Subtotal/Subtotal";

function CheckCart() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkCart">
      <div className="checkCart__left">
        <img
          className="checkCart__ad"
          src="https://m.media-amazon.com/images/S/aplus-media/vc/1fbc9dc4-34c1-4bd8-b623-4cf95b4830fd.__CR0,0,970,300_PT0_SX970_V1___.jpg"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is Empty</h2>
            <p>
              You have no items in your basket. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
            <>
              <h2 className="checkCart__title">Your Shopping Cart</h2>
              {basket?.map((item) => (
                <CheckProduct
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                  image={item.image}
                />
              ))}
            </>
          )}
      </div>
      <div className="checkCart__right">
        <Subtotal />
      </div>
    </div>
  );
}

export default CheckCart;
