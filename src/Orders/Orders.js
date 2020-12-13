import React, { useEffect, useState } from "react";
import { useStateValue } from "../ContextAPI/StateProvider";
import { db } from "../firebase";
import OrderItem from "./OrderItem/OrderItem";
import "./Orders.css";

function Orders() {
  const [{ user }] = useStateValue();
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      db.collection("user")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")
        .onSnapshot((snapshot) =>
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }))
          )
        );
    } else {
      setOrders([]);
    }
  }, []);
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="oders__orderItem">
        {orders.map((order) => (
          <OrderItem order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
