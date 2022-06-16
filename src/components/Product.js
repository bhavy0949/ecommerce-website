import React from "react";
import {Card} from "react-bootstrap";
import Rating from "./Rating";
import {Link} from "react-router-dom";

const Product = (props) => {
    return (
        <Card className="my-3 p-3 rounded">
            <Link to={`/product/${props.product._id}`}>
                <Card.Img src={props.product.image}></Card.Img>
            </Link>
            <Card.Body>
                <Link to={`/product/${props.product._id}`}>
                    <Card.Title as="div">
                        <strong>{props.product.name}</strong>
                    </Card.Title>
                </Link>

                <Card.Body>
                    <Rating value={props.product.rating} text={`${props.product.numReviews} reviews`} color={'#f8e825'} />
                    <Card.Text as="h3">₹{props.product.price}</Card.Text>
                </Card.Body>
            </Card.Body>
        </Card>
    );
};

export default Product;