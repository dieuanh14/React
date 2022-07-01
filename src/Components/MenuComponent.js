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

// class MenuComponent extends React.Component {
//   constructor(props) {
//     super(props);
//     // this.state = {
//     //   selectedDish: this.props.dishes[0],
//     // };
//   }

//   // onDishSelect(dish) {
//   //   console.log(dish);
//   //   this.setState({ selectedDish: dish });
//   // }

//   render() {
//     const menu = this.props.dishes.map((dish) => {
//       return (
//         <div className="col-12 col-md-5 m-1">
//           <Card key={dish.id}
//            onClick={() => this.props.onClick(dish.id)}>
//             <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
//             <CardImgOverlay>
//               <CardTitle>{dish.name}</CardTitle>
//             </CardImgOverlay>
//           </Card>
//         </div>
//       );
//     });

//     return (
//       <div className="container">
//         <div className="row">{menu}</div>
//       </div>
//     );
//   }
// }
function RenderMenuItem({ dish, onClick }) {
  return (
    <>
    {/* <Card onClick={() => onClick(dish.id)}>
      <CardImg width="200px" height="400px" src={dish.image} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card> */}
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
          {/* <RenderMenuItem dish={dish} onClick={props.onClick} /> */}
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
