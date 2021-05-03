import React from "react";
import axios from "commons/axios";
import {toast} from 'react-toastify';

class AddInventory extends React.Component {
  state = {
    name: "",
    image: "",
    mainmeal: "",
    sidedishes: "",
    price: "",
    status: "available",
  };

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };
  submit = async(e) => {
    e.preventDefault();
    const product = { ...this.state };
    try {
      let response = await axios.post(
        "/products",
        product
      );
      this.props.close(response.data)
      toast.success('Add Success')
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <div className="inventory">
        <p className="h1">inventory</p>
        <form onSubmit={this.submit}>
          <div className="form-group row">
            <label>Name</label>
            <textarea
              className="form-control"
              rows="3"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
              required="required"
            />
          </div>
          <div className="form-group row">
            <label className="label">Image</label>
            <input
              type="text"
              className="form-control"
              name="image"
              value={this.state.image}
              onChange={this.handleChange}
              required="required"
            />
          </div>
          <div className="form-group row">
            <label className="label">Mainmeal</label>
            <input
              type="text"
              className="form-control"
              name="mainmeal"
              value={this.state.mainmeal}
              onChange={this.handleChange}
              required="required"
            />
          </div>
          <div className="form-group row">
            <label className="label">Sidedishes</label>
            <input
              type="text"
              className="form-control"
              name="sidedishes"
              value={this.state.sidedishes}
              onChange={this.handleChange}
              required="required"
            />
          </div>
          <div className="form-group row">
            <label className="label">Price</label>
            <input
              type="text"
              className="form-control"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
              required="required"
            />
          </div>
          <div className="form-group row">
            <label className="label">Status</label>
            <select
              className="form-control"
              id="inputState"
              name="status"
              value={this.state.status}
              onChange={this.handleChange}
              required="required"
            >
              <option>available</option>
              <option>unavailable</option>
            </select>
          </div>
          <br />
          <div className="input-group row justify-content-center">
            <button type="submit" className="btn btn-success">
              Submit
            </button>

            <button
              className="btn btn-dark"
              type="button"
              onClick={() => {
                this.props.close("AddInventor Data");
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default AddInventory;
