import React from "react";

class Customize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toppings: [],
      types: [],
      bases: [],
      toppingsCount: ["1"],
      customDonut: {
        base: "",
        type: "",
        toppings: {
          topping1: "none",
          topping2: "none",
          topping3: "none"
        }
      }
    };
    //this.addTopping = this.addTopping.bind(this);
    this.baseChanged = this.baseChanged.bind(this);
    this.typeChanged = this.typeChanged.bind(this);
    this.topping1Changed = this.topping1Changed.bind(this);
    this.topping2Changed = this.topping2Changed.bind(this);
    this.topping3Changed = this.topping3Changed.bind(this);
    this.createDonut = this.createDonut.bind(this);
    this.quantityChanged = this.quantityChanged.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:3001/toppings")
      .then(res => res.json())
      .then(data => {
        let array = [];
        for (const value of data) {
          array.push(value);
        }
        this.setState({ toppings: array });
      });
    fetch("http://localhost:3001/bases")
      .then(res => res.json())
      .then(data => {
        let array2 = [];
        for (const value of data) {
          array2.push(value);
        }
        this.setState({ bases: array });
      });
    fetch("http://localhost:3001/types")
      .then(res => res.json())
      .then(data => {
        let array3 = [];
        for (const value of data) {
          array3.push(value);
        }
        this.setState({ types: array });
      });
  }

  baseChanged(e) {
    this.state.customDonut.base = e.target.value;
  }

  typeChanged(e) {
    this.state.customDonut.type = e.target.value;
  }
  topping1Changed(e) {
    this.state.customDonut.toppings.topping1 = e.target.value;
    this.setState({
      total:
        2 +
        this.getToppingPrice(this.state.customDonut.toppings.topping1) +
        this.getToppingPrice(this.state.customDonut.toppings.topping2) +
        this.getToppingPrice(this.state.customDonut.toppings.topping3)
    });
  }

  topping2Changed(e) {
    this.state.customDonut.toppings.topping2 = e.target.value;
    this.setState({
      total:
        2 +
        this.getToppingPrice(this.state.customDonut.toppings.topping1) +
        this.getToppingPrice(this.state.customDonut.toppings.topping2) +
        this.getToppingPrice(this.state.customDonut.toppings.topping3)
    });
  }

  topping3Changed(e) {
    this.state.customDonut.toppings.topping3 = e.target.value;
    this.setState({
      total:
        2 +
        this.getToppingPrice(this.state.customDonut.toppings.topping1) +
        this.getToppingPrice(this.state.customDonut.toppings.topping2) +
        this.getToppingPrice(this.state.customDonut.toppings.topping3)
    });
  }

  quantityChanged(e) {
    this.setState({ quantity: e.target.value });
    let totalFromDonuts =
      2 + this.getToppingPrice(this.state.customDonut.toppings.topping1);
    this.setState({ total: totalFromDonuts * e.target.value });
  }

  getToppingPrice(toppingName) {
    for (const toppingObj of this.state.toppings) {
      if (toppingObj.name === toppingName) {
        return toppingObj.price;
      }
    }
    return 0;
  }
  // addTopping() {
  //   if (this.state.toppingsCount.length < 3) {
  //     this.setState({ toppingsCount: this.state.toppingsCount.concat[" "] });
  //   } else {
  //     alert("no mas");
  //   }
  // }

  createDonut() {
    // push to db
  }

  render() {
    return (
      <div>
        <h2 className="customize_header">Create a custom donut</h2>
        <p>Starting at $2.00</p>
        Donut Base{" "}
        <select onChange={this.baseChanged}>
          {this.state.bases.map(base => (
            <option>{base.name}</option>
          ))}
        </select>
        <br />
        Donut Type{" "}
        <select onChange={this.typeChanged}>
          {this.state.types.map(type => (
            <option>{type.name}</option>
          ))}
        </select>
        <br />
        Topping 1:{" "}
        <select onChange={this.topping1Changed}>
          <option value="none" selected="select">
            choose a topping
          </option>
          {this.state.toppings.map(topping => (
            <option>{topping.name}</option>
          ))}
        </select>
        <br />
        Topping 2:{" "}
        <select onChange={this.topping2Changed}>
          <option value="none" selected="select">
            choose a topping
          </option>
          {this.state.toppings.map(topping => (
            <option>{topping.name}</option>
          ))}
        </select>
        <br />
        Topping 3:{" "}
        <select onChange={this.topping3Changed}>
          <option value="none" selected="select">
            choose a topping
          </option>
          {this.state.toppings.map(topping => (
            <option>{topping.name}</option>
          ))}
        </select>
        <br />
        Quantity:{" "}
        <input
          type="text"
          placeholder="how many?"
          onChange={this.quantityChanged}
        />
        <button onClick={this.createDonut}>Create Donut</button>
        Total: {this.state.total}
      </div>
    );
  }
}

export default Customize;
