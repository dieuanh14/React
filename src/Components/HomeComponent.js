import React from "react";
import { CardImg, Card } from "react-bootstrap";
import { CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap";

export function RenderCard ({item}){
  console.log(item)
  return (
    <Card>
      <CardImg src={item.image} /> 
       <CardBody>
        <CardTitle>{item.name}</CardTitle>
      
          <CardSubtitle>{item.designation}</CardSubtitle>
     
        <CardText>{item.description}</CardText>
      </CardBody>
    
    </Card>
  );
}
export default function HomeComponent(props) {
return (
  <div className="container">
    <div className="row align-items-start">
      <div className="col-12 col-md m-1">
        <RenderCard item={props.dish} />
      </div>
      <div className="col-12 col-md m-1">
        <RenderCard item={props.promotion} />
      </div>
      <div className="col-12 col-md m-1">
        <RenderCard item={props.leader} />
      </div>
    </div>
  </div>
);
}
