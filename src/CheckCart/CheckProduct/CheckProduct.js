import React from "react";
import { useStateValue } from "../../ContextAPI/StateProvider";
import "./CheckProduct.css";

function CheckProduct({ id, title, price, rating, image, hideButton }) {
  const [{}, dispatch] = useStateValue();
  const handleRemove = (e) => {
    e.preventDefault();
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };
  return (
    <div className="checkproduct">
      <img src={image} alt="" className="checkproduct__image" />
      <div className="checkproduct__info">
        <p className="checkproduct__title">{title}</p>
        <p className="checkproduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkproduct__rating">
          {Array(rating)
            .fill()
            .map((_) => (
              <p>⭐️</p>
            ))}
        </div>
        {!hideButton && <button onClick={handleRemove}>Remove Item</button>}
      </div>
    </div>
  );
}

export default CheckProduct;
