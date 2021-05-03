import React, { useState } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "commons/axios";

const CartItem = (props) => {
  const [mount, setMount] = useState([props.cart.mount]);
  const { id, name, image, price } = props.cart || {};
  const sumPrice = mount * parseInt(price);

  const handleChange = (e) => {
    const _mount = parseInt(e.target.value);
    setMount(_mount);
    const newCart = {
      ...props.cart,
      mount: _mount,
    };
    axios.put(`/carts/${id}`, newCart).then((res) => {});
    props.updateCart(newCart);
  };

  const deleteCart =() =>{
    axios.delete(`/carts/${id}`).then((res) => {
        props.deleteCart(props.cart)
    });
  }

  return (
    <Container className="cartitem-container">
      <Row className="align-items-center">
        <Col>
          <span className="cart-close" onClick={deleteCart}>X</span>
        </Col>
        <Col>
          <img src={image} alt={name} width="100" />
        </Col>
        <Col sm={4} className="cart-name">
          {name}
        </Col>
        <Col>
          <span className="price">{price}</span>
        </Col>
        <Col>
          <select value={mount} onChange={handleChange} className="mount" >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </select>
        </Col>
        <Col>
          <span className="sum-price">${sumPrice}</span>
        </Col>
      </Row>
    </Container>
  );
};

export default CartItem;
