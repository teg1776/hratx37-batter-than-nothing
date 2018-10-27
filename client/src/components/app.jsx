import React from "react";
import ReactDOM from "react-dom";
import Donuts from "./donuts.jsx";
import Home from "./home.jsx";
import Customize from "./customize.jsx";
import Cart from "./cart.jsx";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      donuts: [],
      page: "home",
      items: 0
    };
    this.handleRoute = this.handleRoute.bind(this);
    // routes: {
    //     home: true,
    //     donuts: false,
    //     customize: false,
    //     order: false,
    // }
  }

  componentDidMount() {
    fetch("http://localhost:3001/api/donuts")
      .then(res => res.json())
      .then(results => {
        console.log(results);
        this.setState({ donuts: results });
      });
  }

  homeClick(el) {
    // have the home page clicked by default
    el.click();
  }

  handleRoute(clickedRoute = "home") {
    // Sets boolean value to help determine what component should show
    // for (const route in this.state.routes) {
    //     this.state.routes[route] = false;
    // }
    // this.state.routes[clickedRoute] = true;
    switch (clickedRoute) {
      case "donuts":
        this.setState({
          page: <Donuts donuts={this.state.donuts} />
        });
        break;
      case "customize":
        this.setState({ page: <Customize /> });
        break;
      case "cart":
        this.setState({ page: <Cart /> });
        break;
      default:
        this.setState({
          page: (
            <Home
              clicker={() => this.handleRoute("donuts")}
              customClicker={() => this.handleRoute("customize")}
            />
          )
        });
        break;
    }
  }

  render() {
    return (
      <div>
        <div className="heading">
          <h1 className="title_heading">The Donut Shop!</h1>
          <nav className="nav_heading">
            <a
              href="#"
              ref={this.homeClick}
              onClick={() => this.handleRoute("home")}
            >
              Home
            </a>
            |{" "}
            <a href="#" onClick={() => this.handleRoute("donuts")}>
              Donuts
            </a>
            |{" "}
            <a href="#" onClick={() => this.handleRoute("customize")}>
              Customize
            </a>
            |{" "}
            <a href="#" onClick={() => this.handleRoute("cart")}>
              Cart: {this.state.items}
            </a>
          </nav>
        </div>
        <div>{this.state.page}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
