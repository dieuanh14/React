import React, { Component } from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import MenuComponent from "./MenuComponent";
import DishdetailComponent from "./DishdetailComponent";
import { DISHES } from "../shared/dishes";
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
import { comment, parse } from "postcss";

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS,
    };
  }

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
      const params = useParams();
      console.log(params);
      return (
        <>
          <DishdetailComponent
            dish={
              this.state.dishes.filter(
                (dish) => dish.id === parseInt(params.dishId)
              )[0]
            }
            comments={this.state.comments.filter(
              (comment) => comment.dishId === parseInt(params.dishId)
            )}
          />
        </>
      );
    };
    return (
      <div>
        <BrowserRouter>
          <HeaderComponennt />
          <Routes>
            <Route path="/home" element={<HomePage />} />
            <Route
              exact
              path="/menu"
              element={<MenuComponent dishes={this.state.dishes} />}
            />
            <Route exact path="/contactus" element={<ContactComponent />} />
            <Route path="/menu/:dishId" element={<DishWithId />} />
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
