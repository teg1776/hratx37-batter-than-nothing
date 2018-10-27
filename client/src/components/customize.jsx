import React from "react";

class Customize extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      donut: ""
    };
  }

  render() {
    return (
      <div className="customize_container">
        <h2 className="customize_header">Create a custom donut</h2>
        <p>Starting at $2.00</p>
        <div className="customize_com1">
          Donut Name <input type="text" />
          <br />
          Donut Description <input type="text" />
          <br />
          Donut Base{" "}
          <select>
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
          </select>
          <br />
          Donut Type{" "}
          <select>
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
          </select>
          <br />
          Topping{" "}
          <select>
            <option value="one">1</option>
            <option value="two">2</option>
            <option value="three">3</option>
          </select>
          <button type="button">Add+</button>
          <br />
          <button type="button">Create One!</button>
        </div>
        <div className="customize_com2">
          Topping Name <input type="text" />
          <br />
          Price <input type="text" />
          <br />
          <button type="button">Add More Topping Choices</button>
        </div>
      </div>
    );
  }
}

export default Customize;
