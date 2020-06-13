import React from "react";
import axios from "axios";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import ToolBox from "components/ToolBox";
import Menu from "components/Menu";
import Panel from "components/Panel"
import AddInventor from "components/AddInventor"
class Booking extends React.Component {
  state = {
    products: [],
    sourceProducts: [],
  };
  componentDidMount = async () => {
    try {
      const response = await axios.get(
        "http://localhost/html/longping/longping/src/php/Products.php"
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

  toAdd = () =>{
    Panel.open({
      component : AddInventor,
      callback:data=>{
        console.log('Product Date :',data)
      }
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
              {this.state.products.map((p) => {
                return (
                  <CSSTransition
                    classNames="products-fade"
                    timeout={300}
                    key={p.id}
                  >
                    <div className="col-sm-3 col-xs-12" key={p.id}>
                      <Menu product={p} />
                    </div>
                  </CSSTransition>
                );
              })}
            </TransitionGroup>
          </div>
          <button className="btn btn-primary add-btn" onClick={this.toAdd}>add</button>
        </div>
      </div>
    );
  }
}

export default Booking;
