import React from "react";

const Cart = props => {
  return (
    <div>
      <h3>Your Cart</h3>
      Customer Name: <input type="text" />
      {props.cart.map((item, i) => (
        <div key={i}>
          <span>
            {item.name} ${item.price}
          </span>
        </div>
      ))}
      <br />
      <button onClick={() => alert("Order placed!")}>Place Order</button>
      <br />
      Total: $16
    </div>
  );
};

export default Cart;
