import React from "react";
import { render } from "react-dom";
class Panel extends React.Component {
  state = {
    active: false,
    component: null,
    callback: () => {},
  };

  open = (
    options = {
      props: {},
      component: null,
      callback: () => {},
    }
  ) => {
    const { props, component, callback } = options;
    const _key = Date.now();
    console.log(_key);
    const _component = React.createElement(component, {
      ...props,
      close: this.close,
      key: _key,
    });
    this.setState({
      active: true,
      component: _component,
      callback: callback,
    });
  };
  close = (data) => {
    this.setState({
      active: false,
    });
    this.state.callback(data);
  };
  render() {
    return (
      <div
        className={this.state.active ? "panel-wrapper active" : "panel-wrapper"}
      >
        <div
          className="over-layer"
          onClick={() => {
            this.close();
          }}
        ></div>
        <div className="panel">
          <div className="head">
            <span
              className="close"
              onClick={() => {
                this.close();
              }}
            >
              x
            </span>
            <div className="has-text-center">{this.state.component}</div>
          </div>
        </div>
      </div>
    );
  }
}
const _div = document.createElement("div");
document.body.appendChild(_div);
const _panel = render(<Panel />, _div);
export default _panel;
