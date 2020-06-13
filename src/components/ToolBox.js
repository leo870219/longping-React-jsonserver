import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
class ToolBox extends React.Component {
  state ={
    searchText:''
  }
  handleChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchText:value
    })
    this.props.search(value)
  } 

  clearSearchText = () =>{
    this.setState({searchText:''})
  }
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
          <div className="car-box col d-flex justify-content-end">
            <FontAwesomeIcon icon={faShoppingCart} />
            <span className="cart-number">(0)</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ToolBox;
