import React from "react";

const Donuts = ({ donuts }) =>
  donuts.map(donut => (
    <div>
      {donut.name}
      <img src={donut.image} />
      <button type="button">Order</button>
    </div>
  ));

export default Donuts;
