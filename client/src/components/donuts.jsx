import React from "react";

class Donuts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.onChange = this.onChange.bind(this);
    this.createDonut = this.createDonut.bind(this);
  }

  onChange(e) {
    this.setState({ count: e.target.value });
  }

  createDonut(donut) {
    donut.price = this.state.count * donut.price;
    this.props.cart.push(donut);
  }

  render() {
    return this.props.donuts.map((donut, i) => (
      <div key={i}>
        <img src={donut.image} />
        <br />
        <span>{donut.name}</span>
        <br />
        <span>${donut.price}</span>
        <br />
        <span>Quantity</span>
        <input type="text" onChange={this.onChange} />
        <input
          type="button"
          onClick={() => this.createDonut(donut)}
          value="add to cart"
        />
      </div>
    ));
  }
}

export default Donuts;
