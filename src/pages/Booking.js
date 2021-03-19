import React from "react";
import axios from "commons/axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ToolBox from "components/ToolBox";
import Menu from "components/Menu";
import Panel from "components/Panel";
import AddInventor from "components/AddInventor";
class Booking extends React.Component {
  state = {
    products: [],
    sourceProducts: [],
  };
  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "/product"
      );
      this.setState({ products: response.data });
      this.setState({ sourceProducts: response.data });
    } catch (error) {
      console.log(error);
    }
  };
  search = (text) => {
    let _products = [...this.state.sourceProducts].filter((p) => {
      const matchArray = p.name.match(new RegExp(text, "gi"));

      return !!matchArray;
    });
    this.setState({ products: _products });
  };

  toAdd = () => {
    Panel.open({
      component: AddInventor,
      callback: (data) => {
        if (data) {
          this.add(data);
        }
        console.log("Product Date :", data);
      },
    });
  };
  add = product => {
    const _products = [...this.state.products];
    _products.push(product);
    const _sourceProducts = [...this.state.sourceProducts];
    _sourceProducts.push(product);

    this.setState({
      products: _products,
      sourceProducts: _sourceProducts,
    });
  };
  update = product => {
    const _products = [...this.state.products];
    const _index = _products.findIndex((p) => p.id === product.id);
    _products.splice(_index, 1, product);
    const _sourceProducts = [...this.state.sourceProducts];
    const _sourceIndex = _products.findIndex((p) => p.id === product.id);
    _sourceProducts.splice(_sourceIndex, 1, product);
    this.setState({
      products: _products,
      sourceProducts: _sourceProducts,
    });
  };

  delete = id =>{
    const _products = this.state.products.filter(p => p.id !== id)
    const _sourceProducts = this.state.products.filter(p => p.id !== id)
    this.setState({
      products:_products,
      sourceProducts:_sourceProducts
    })
  }
  render() {
    return (
      <div className="order-menu">
        <div className="container">
          <ToolBox search={this.search} />
          <hr />
          <div className="row">
            <TransitionGroup component={null}>
              {this.state.products.map(p => {
                return (
                  <CSSTransition
                    classNames="products-fade"
                    timeout={300}
                    key={p.id}
                  >
                    <div className="col-sm-3 col-xs-12" key={p.id}>
                    <Menu product={p} update={this.update} delete={this.delete}/>
                    </div>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
          </div>
          <button className="btn btn-primary add-btn" onClick={this.toAdd}>
            add
          </button>
        </div>
      </div>
    );
  }
}

export default Booking;
