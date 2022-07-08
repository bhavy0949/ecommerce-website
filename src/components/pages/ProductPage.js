import React from "react";
import {Link} from "react-router-dom";
import {Button, Col, Image, ListGroup, ListGroupItem, Row} from "react-bootstrap";
import products from "../../products";
import Rating from "../Rating";

const ProductPage = ({match}) => {
  const product = products.find((p) => p._id === match.params.id)
  return (
      <div>
      <Link to='/' className='btn btn-light my-3'>Go Back</Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} />
        </Col>
          <Col md={3}>
              <ListGroup variant='flush'>
                  <ListGroup.Item>
                      <h3>{product.name}</h3>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      <Rating value={product.rating} text={`${product.numReviews} reviews`} color={'#f8e825'} />
                  </ListGroup.Item>
                  <ListGroup.Item>
                      Description: {product.description}
                  </ListGroup.Item>
              </ListGroup>
          </Col>
          <Col md={3}>
              <ListGroup variant='flush'>
                  <ListGroup.Item>
                      <Row>
                          <Col>
                              Price:
                          </Col>
                          <Col>
                              <strong>${product.price}</strong>
                          </Col>
                      </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      <Row>
                          <Col>
                              Status:
                          </Col>
                          <Col>
                              <strong>
                                  {product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}
                              </strong>
                          </Col>
                      </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                      <Button className='btn-outline-dark' type='button' disabled={product.countInStock === 0}>Add to Cart</Button>
                  </ListGroup.Item>
              </ListGroup>
          </Col>
      </Row>
      </div>
  );
};

export default ProductPage;