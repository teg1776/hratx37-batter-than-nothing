import React from "react";

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donut: ""
    };
  }

  render() {
    return (
      <div>
        <p>CART</p>
      </div>
    );
  }
}

export default Cart;
