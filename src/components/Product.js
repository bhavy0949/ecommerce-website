import React from "react";
import {Card} from "react-bootstrap";

const Product = (props) => {
    return (
        <Card className="my-3 p-3 rounded">
            <a href={`/product/${props.product._id}`}>
                <Card.Img src={props.product.image}></Card.Img>
            </a>
            <Card.Body>
                <a href={`/product/${props.product._id}`}>
                    <Card.Title as="div">
                        <strong>{props.product.name}</strong>
                    </Card.Title>
                </a>

                <Card.Body>
                    <Card.Text as="div"><div>{props.product.rating} from {props.product.numReviews} reviews</div></Card.Text>
                    <Card.Text as="h3">₹{props.product.price}</Card.Text>
                </Card.Body>
            </Card.Body>
        </Card>
    );
};

export default Product;