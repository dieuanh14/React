import React, { useState } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
export default function DishdetailComponent(props) {
  //   function renderDishes({ dish }) {
  //     return (
  //       <div className="col-12 col-sm-5">
  //         <Card>
  //           <CardImg top src={dish.image} alt={dish.name} />
  //           <CardBody>
  //             <CardTitle>{dish.name}</CardTitle>
  //             <CardText>{dish.description}</CardText>
  //           </CardBody>
  //         </Card>
  //       </div>
  //     );
  //   }

  //   function renderComments({ comments }) {
  //     const comment = comments.map((item) => {
  //       return (
  //         <div>
  //           <p>{item.comment}</p>
  //           <p>
  //             {item.author} {item.date}
  //           </p>
  //         </div>
  //       );
  //     });
  //     return (
  //       <div className="col-12 col-sm-7">
  //         {comment}
  //       </div>
  //     );
  //   }

  if (props.dish != null) {
    const comment = props.dish.map((item) => {
      return (
        <div key={item.id}>
          <p>{item.comment}</p>
          <p>
            {item.author} {item.date}
          </p>
          <p>
            {item.comments.map((comment) => (
              <div key={comment.id}>
                <p>{comment.rating}</p>
                <p>{comment.comment}</p>
                <p>{comment.author}</p>
                <p>{comment.date}</p>
              </div>
            ))}
          </p>
        </div>
      );
    });
    const dish = props.dish;
    return (
      <div className="container">
        <div className="row">
          <div className="col-12 col-sm-5">
            <Card>
              <CardImg top src={dish.image} />
              <CardBody>
                <CardTitle>{dish.name}</CardTitle>
                <CardText>{dish.description}</CardText>
              </CardBody>
            </Card>
          </div>
          <div className="col-12 col-sm-7">{comment}</div>
        </div>
      </div>
    );
  } else {
    return <div></div>;
  }
}
