import React from "react";
import {
    Card,
    CardImg,
    CardText,
    CardTitle,
    CardBody,
    CardSubtitle
  } from "reactstrap";

function RenderCard({item}) {
  console.log(item.image)

  return (
    <Card>
        <CardImg src={item.image}></CardImg>
        <CardBody>
            <CardTitle>{item.name}</CardTitle>
            {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
            <CardText>{item.description}</CardText>
        </CardBody>
    </Card>
  );
}


function HomeComponent(props){
    return(
        <div className="container">
            <div className="row align-items-start">
                <div className="col-12 col-md m-1">   
                    <RenderCard item={props.dish}></RenderCard>
                </div>
                <div className="col-12 col-md m-1">   
                    <RenderCard item={props.promotion}></RenderCard>
                </div>
                <div className="col-12 col-md m-1">   
                    <RenderCard item={props.leader}></RenderCard>
                </div>
            </div>
        </div>
    );
}

export default HomeComponent;