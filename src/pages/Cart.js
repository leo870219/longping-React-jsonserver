import axios from "commons/axios";
import { Link } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import React, { useState, useEffect } from "react";
import CartItem from "components/CartItem";
import { Container } from "react-bootstrap";
const Cart = (props) => {
  const [carts, setCarts] = useState([]);

  useEffect(() => {
    const user = global.auth.getUser() || {};
    axios.get(`/carts?userId=${user.email}`).then((res) => setCarts(res.data));
  }, []);

  const totalPrice = () => {
    const totalPrice = carts
      .map((cart) => cart.mount * parseInt(cart.price))
      .reduce((a, value) => a + value, 0);
    return totalPrice;
  };

  const updateCart = (cart) => {
    const newCarts = [...carts];
    const _index = newCarts.findIndex((c) => c.id === cart.id);
    newCarts.splice(_index, 1, cart);
    setCarts(newCarts);
  };

  const deleteCart = (cart) => {
    const _carts = carts.filter((c) => c.id !== cart.id);
    setCarts(_carts);
  };
  const submit = () => {
    props.history.push("/orderinformation");
  };
  return (
    <Container className="cart-page">
      <div className="cart-title row">
        <u className="col">Shopping Cart</u>
        <Link
          className=" d-flex align-self-center justify-content-end"
          to="/booking"
        >
          返回商品列表
        </Link>
      </div>
      <div className={carts ? "" : "cart-list"}>
        <TransitionGroup component={null}>
          {carts.map((cart) => (
            <CSSTransition classNames="cart-item" timeout={300} key={cart.id}>
              <CartItem
                key={cart.id}
                cart={cart}
                updateCart={updateCart}
                deleteCart={deleteCart}
              />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
      {carts.length === 0 ? <div className="no-cart">購物車內無商品</div> : ""}
      {carts.length === 0 ? (
        ""
      ) : (
        <div className="row cart-total justify-content-end">
          <span className="total-price">Total:${totalPrice()}</span>
          <button className="cart-to-order" onClick={submit}>
            下一步，前往填寫訂購資料
          </button>
        </div>
      )}
    </Container>
  );
};

export default Cart;
