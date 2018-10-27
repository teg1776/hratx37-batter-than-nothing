import React from "react";

class Donuts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ count: e.target.value });
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
          onClick={() => this.props.updateCart(donut.name, this.state.count)}
          value="add to cart"
        />
      </div>
    ));
  }
}

export default Donuts;
