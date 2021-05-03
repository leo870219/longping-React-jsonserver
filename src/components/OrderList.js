import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";

const OrderList = (props) => {
  const [mount] = useState([props.cart.mount]);
  const { name, price } = props.cart || {};
  const sumPrice = mount * parseInt(price);

  return (
    <Container>
      <Row className="align-items-center">

        <Col sm={4}>
          {name}
        </Col>
        <Col>
          <span>{price}</span>
        </Col>
        <Col>
          <p>{mount}</p>
        </Col>
        <Col>
          <span>${sumPrice}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default OrderList;
