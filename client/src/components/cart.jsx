import React from "react";

const Cart = props => {
  return (
    <div>
      <h3>Your Cart</h3>
      Customer Name: <input type="text" />
      {props.cart.map((item, i) => (
        <div key={i}>
          <span>
            {item.name} x2 ${item.price}
          </span>
        </div>
      ))}
      <br />
      <button
        onClick={() =>
          alert(
            "Order Placed!...kind of..just call (737) 207-9062 to make sure"
          )
        }
      >
        Place Order
      </button>
      <br />
      {console.log(props.cart)}
      Total: $16
    </div>
  );
};

export default Cart;
