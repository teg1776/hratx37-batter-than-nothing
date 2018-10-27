import React from "react";
import Customize from "./customize.jsx";
import Donuts from "./donuts.jsx";
//
const Home = props => {
  return (
    <div>
      <div>
        <img
          className="home_img"
          src="https://toogoodtobe.co.uk/wp-content/uploads/2018/06/Rainbow-Doughnut_Main-1300x400.jpg"
        />
      </div>
      <div className="home_component_container">
        <div className="custom_component">
          <div>
            <img
              className="custom_img"
              src="https://png.pngtree.com/svg/20170815/pastry_bag_911979.png"
            />
          </div>
          <div>
            <button
              className="custom_button"
              type="button"
              onClick={() => props.customClicker()}
            >
              Customize Your Own
            </button>
          </div>
        </div>
        <div className="donuts_component">
          <div>
            <img
              className="donuts_img"
              src="https://vignette.wikia.nocookie.net/simpsonstappedout/images/1/18/Dumpster_of_Donuts_and_Premium_Box.png/revision/latest?cb=20140806224047"
            />
          </div>
          <div>
            <button
              className="donuts_button"
              type="button"
              onClick={() => props.clicker()}
            >
              Shop From Collection
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
