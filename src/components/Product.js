import React from "react";
class Product extends React.Component {
  render() {
    const { id, name, image, mainmeal, sidedishes, price } = this.props.product;
    return id % 2 === 1 ? (
      <div className="row justify-content-between">
        <div className="col-sm align-self-center" id={id}>
          <img
            className="img-fluid rounded mx-auto d-block"
            alt={name}
            src={image}
          />
        </div>
        <div className="col-sm">
          <h4>{name}</h4>
          <h6>
            主餐:{mainmeal}
            <br />
            配菜:{sidedishes}
            <br />
            價格:NT{price}元
          </h6>
        </div>
      </div>
    ) : (
      <div className="row justify-content-between">
        <div className="col-sm order-sm-2 align-self-center" id={id}>
          <img
            className="img-fluid rounded mx-auto d-block"
            alt={name}
            src={image}
          />
        </div>
        <div className="col-sm order-sm-1 ">
          <h4>{name}</h4>
          <h6>
            主餐:{mainmeal}
            <br />
            配菜:{sidedishes}
            <br />
            價格:NT{price}元
          </h6>
        </div>
      </div>
    );
  }
}

export default Product;
