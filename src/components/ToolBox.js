import React from "react";
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { toast } from "react-toastify";
class ToolBox extends React.Component {
  state = {
    searchText: "",
  };
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchText: value,
    });
    this.props.search(value);
  };

  clearSearchText = () => {
    this.setState({ searchText: "" });
  };

  goCart = () => {
    if (!global.auth.isLogin()) {
      this.props.history.push("/login");
      toast.info("請先登入");
      return;
    }
    this.props.history.push("/cart");
  };

  render() {
    return (
      <div className="container-fluid tool-box">
        <div className="row">
          <div className="menu-img col d-flex justify-content-start">
            <p>Menu</p>
          </div>
          <div className="search-box col d-flex">
            <input
              className="form-control d-flex"
              type="search"
              placeholder="輸入想搜尋的商品"
              aria-label="Search"
              value={this.state.searchText}
              onChange={this.handleChange}
            />
          </div>
          <div
            to="/cart"
            className="car-box col d-flex justify-content-end"
            onClick={this.goCart}
          >
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-number">({this.props.cartNum})</span>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(ToolBox);
