import React from "react";
import { withRouter } from "react-router-dom";
import Panel from "components/Panel";
import { toast } from "react-toastify";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import EditInventor from "components/EditInventor";
import axios from "commons/axios";
class Menu extends React.Component {
  toEdit = () => {
    Panel.open({
      component: EditInventor,
      props: {
        product: this.props.product,
      },
      callback: (data) => {
        if (data) {
          this.props.update(data);
        }
      },
    });
  };

  addCart = async () => {
    if (!global.auth.isLogin()) {
      this.props.history.push("/login");
      toast.info("請先登入");
      return;
    }
    try {
      const user = global.auth.getUser().email;
      const { id, name, image, price } = this.props.product;
      const res = await axios.get(`/carts?productId=${id}&userId=${user}`);
      const carts = res.data;
      console.log(carts)
      if (carts && carts.length > 0) {
        const cart = carts[0];
        cart.mount += 1;
        axios.put(`/carts/${cart.id}`, cart);
      } else {
        const cart = {
          productId: id,
          name,
          image,
          price,
          mount: 1,
          userId: user,
        };
        await axios.post("/carts", cart);
      }
      toast.success("Add Cart Success");
      this.props.updateCartNum();
    } catch (error) {
      toast.error("Add Cart Failed");
    }
  };

  renderManagerButton = () => {
    const user = global.auth.getUser() || {};
    if (user.type === 1) {
      return (
        <div className="mr-3 mt-3 text-right" onClick={this.toEdit}>
          <FontAwesomeIcon icon={faSlidersH} />
        </div>
      );
    }
  };

  render() {
    const { name, image, price } = this.props.product;
    return (
      <div className="card">
        {this.renderManagerButton()}
        <img
          src={image}
          className="menu-card-img d-flex justify-content-center align-items-center;"
          alt={name}
        />
        <div className="card-body">
          <p className="card-title d-flex justify-content-start">{name}</p>
          <div className="cart-text d-flex justify-content-between">
            <span className="menu-card-text ">${price}</span>
            <button className="card-link" onClick={this.addCart}>
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Menu);
