import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import MenuComponent from "./MenuComponent";
import DishdetailComponent from "./DishdetailComponent";
import { DISHES } from "./dish";
import FooterComponent from "./FooterComponent";
import HomeComponent from "./HomeComponent";
import { COMMENTS } from "../shared/comments";
import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import HeaderComponennt from "./HeaderComponennt";
import ContactComponent from "./ContactComponent";
import AboutComponent from "./AboutComponent";
import {
  Switch,
  Route,
  Routes,
  Redirect,
  BrowserRouter,
  useParams,
} from "react-router-dom";
import { parse } from "postcss";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      // selectedDish: null,
    };
  }
  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId });
  // }
  render() {
    const HomePage = () => {
      return (
        <HomeComponent
          dish={this.state.dishes.filter((dish) => dish.featured)[0]}
          promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
          leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    };

    const DishWithId = () => {
      const {dishId} = useParams();
      return (
        <>
        <h1>sdfsdfsdfz</h1>
        <DishdetailComponent
          dish={
            this.state.dishes.filter(
              (dish) => dish.id === parseInt(dishId, 10)
            )[0]
          }
        />
        </>
      );
      return <h1>asdasd</h1>
    };
    return (
      <div>

        <BrowserRouter>
          <HeaderComponennt />
          {/* <AboutComponent /> */}
          {/* <HomeComponent /> */}
          <Routes>
            <Route
              path="/home"
              element={
                // <HomePage/>
                <HomeComponent
                  dish={this.state.dishes.filter((dish) => dish.featured)}
                  promotion={this.state.promotions.filter(
                    (promo) => promo.featured
                  )}
                  leader={this.state.leaders.filter(
                    (leader) => leader.featured
                  )}
                />
              }
            />
            <Route
              exact
              path="/menu"
              element={<MenuComponent dishes={this.state.dishes} />}
            />
            <Route exact path="/contactus" element={<ContactComponent />} />
            <Route path="/menu/:dishId"
              element={<DishWithId/>}
            />
            <Route
              exact
              path="/aboutus"
              element={<AboutComponent leaders={this.state.leaders} />}
            />
          </Routes>
          <FooterComponent />
        </BrowserRouter>
      </div>
    );
  }
}

