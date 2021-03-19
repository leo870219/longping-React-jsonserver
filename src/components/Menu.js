import React from "react";
import axios from "commons/axios";
import { toast } from "react-toastify";
import Panel from "components/Panel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faSlidersH } from "@fortawesome/free-solid-svg-icons";
import EditInventor from "components/EditInventor";
class Menu extends React.Component {
  toEdit = () => {
    Panel.open({
      component: EditInventor,
      props: {
        product: this.props.product,
        deleteProduct:this.props.delete
      },
      callback: data => {
        if (data) {
          this.props.update(data);
        }
      },
    });
  };
  addCart = async () => {
    const { id, name, image, price } = this.props.product;
    const res = await axios.get(`https://longping-phpmysql.herokuapp.com/Cart.php?productid=${id}`
    
    );
    const carts = res.data;
    console.log(carts)
    if (carts && carts.length > 0) {
      const cart = carts[0];
      cart.mount += 1;
      await axios.put(`https://longping-phpmysql.herokuapp.com/Cart.php/${id}`
      , cart);
    } else {
      const cart = {
        product: id,
        name,
        image,
        price,
        mount: 1,
      };
      try {
        await axios
          .post("https://longping-phpmysql.herokuapp.com/Cart.php", cart)
          .then((res) => {
            console.log(res.data);
            toast.success("新增商品至購物車成功");
          });
      } catch (error) {
        console.log(error);
      }
    }
  };
  render() {
    const { name, image, price } = this.props.product;
    return (
      <div className="card">
        <div className="mr-3 mt-3 text-right" onClick={this.toEdit}>
          <FontAwesomeIcon icon={faSlidersH} />
        </div>
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

export default Menu;
