import React from "react";
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
      },
      callback: (data) => {
        if (data) {
          this.props.update(data);
        }
      },
    });
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
            <button className="card-link">
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Menu;
