import React, { useState } from "react";
import { BreadcrumbItem } from "react-bootstrap";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
  Breadcrumb,
} from "reactstrap";
import { Link } from "react-router-dom";

export function RenderDish({ dish }) {
  return (
    <div className="col-12 col-sm-5">
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

export function RenderComments({ comments }) {
  const comment = comments.map((item) => {
    return (
      <div>
        <p>{item.comment}</p>
        <p>
          {item.author} {item.date}
        </p>
      </div>
    );
  });
  return (
    <div className="col-12 col-sm-7">
      {comment}
    </div>
  );
}
export default function DishdetailComponent(props) {
  if(props.dish !=null){
  const dishes=props.dish;
  const comments=props.comments;
  return(
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{dishes.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{dishes.name}</h3>
          <hr/>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          <RenderDish dish={dishes}/>
        </div>
        <div className="col-12 col-md-5 m-1">
          <RenderComments comments={comments}/>
        </div>
      </div>
    </div>
  );
  }

}
