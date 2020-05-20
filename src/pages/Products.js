import React from "react";
import axios from "commons/axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import MainImage from "components/MainImage";
import Product from "components/Product";

class Products extends React.Component {
  state = {
    products: [],
  };

  componentDidMount() {
    axios
      .get("http://localhost/html/longping/longping/src/php/Products.php")
      .then((response) => {
        this.setState({ products: response.data });
      });
  }
  render() {
    return (
      <div className="productContent">
        <MainImage page={this.props.match.path} />
        <div className="productBackground">
          <nav id="third" className="container-fuild">
            <div className="row justify-content-center button-group1">
              <a className="btn btn-blue align-self-center" href="#1">
                滷肉便當
              </a>
              <a className="btn  btn-green" href="#2">
                特製便當
              </a>
              <a className="btn  btn-orange" href="#3">
                花枝捲飯
              </a>
              <a className="btn  btn-red" href="#4">
                蝦捲飯
              </a>
              <a className="btn  btn-maroon" href="#5">
                滷排骨飯
              </a>
              <a className="btn  btn-fuchsia" href="#6">
                炸雞腿飯
              </a>
            </div>
            <div className="row justify-content-center button-group2">
              <a className="btn  btn-indigo" href="#7">
                鱈魚飯
              </a>
              <a className="btn  btn-saddlebrown" href="#8">
                炸排骨飯
              </a>
              <a className="btn  btn-chocolate" href="#9">
                香雞排飯
              </a>
              <a className="btn  btn-gold" href="#10">
                雙捲飯
              </a>
              <a className="btn  btn-darkolivegreen" href="#11">
                三寶飯
              </a>
              <a className="btn  btn-royalblue" href="#12">
                招牌飯
              </a>
            </div>
          </nav>
          <section id="productList">
            <TransitionGroup component={null}>
              {this.state.products.map((p) => {
                return (
                  <CSSTransition
                    classNames="products-fade"
                    in
                    appear={true}
                    timeout={3000}
                    key={p.id}
                  >
                    <div className="container" key={p.id}>
                      <Product product={p} />
                    </div>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
          </section>
        </div>
      </div>
    );
  }
}

export default Products;
