import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import MenuComponent from "./MenuComponent";
import DishdetailComponent from "./DishdetailComponent";
import { DISHES } from "./dish";
import HeaderComponent from "./HeaderComponennt";
import FooterComponent from "./FooterComponent";
import HomeComponent from "./HomeComponent";
import {
  Switch,
  Route,
  Routes,
  Redirect,
  BrowserRouter,
} from "react-router-dom";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      // selectedDish: null,
    };
  }
  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId });
  // }
  render() {
    const HomePage = () => {
      return <HomeComponent />;
    };
    return (
      <div>
        {/* <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <MenuComponent
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <DishdetailComponent
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === this.state.selectedDish
            )[0]
          }
        /> */}
        <HeaderComponent />
        <MenuComponent
          dishes={this.state.dishes}
          onClick={(dishId) => this.onDishSelect(dishId)}
        />
        <DishdetailComponent
          dish={this.state.dishes.filter(
            (dish) => dish.id === this.state.selectedDish[0]
          )}
        />
        {/* <BrowserRouter>
            <MenuComponent/>
            <Routes>
              <Route exact path="/" element={<HomeComponent />} />
              <Route exact path="/menu" component={<MenuComponent />} />
            </Routes>
            <FooterComponent />
          </BrowserRouter> */}
        <FooterComponent />
      </div>
    );
  }
}
