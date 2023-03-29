import React from "react";
import classes from "./Cart,module.css";

const Cart = () => {
  const cartItem = (
    <ul className={classes["cart-item"]}>
      {[{ id: "c1", name: "Sushi", amount: 2, price: 150000 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <div>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>300000</span>
      </div>
      <div>
        <button className={classes["button--alt"]}>close</button>
        <button className={classes.button}>order</button>
      </div>
    </div>
  );
};

export default Cart;
