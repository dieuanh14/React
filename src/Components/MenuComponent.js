import React from "react";
import { Link } from "react-router-dom";
import DishdetailComponent from "./DishdetailComponent";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
} from "reactstrap";
import { BreadcrumbItem } from "react-bootstrap";

function RenderMenuItem({ dish, onClick }) {
  return (
    <>
    <Card>
      <Link to={`/menu/${dish.id}`}>
        <CardImg width="200px" height="300px" src={dish.image} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Link>
    </Card>
    </>
  );
}
const MenuComponent = (props) => {
  console.log(props.dishes);
  const menu =
    props.dishes &&
    props.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1">
          <div key={dish.id}>
            <RenderMenuItem dish={dish} />
          </div>
        </div>
      );
    });
  return (
    <div className="container">
      <div className="row">
        {/* {menu} */}
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="home">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Menu</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Menu</h3>
          <hr />
        </div>
      </div>
      <div className="row">{menu}</div>
    </div>
  );
};
export default MenuComponent;
