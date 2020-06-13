import React from "react";
import axios from "commons/axios";
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
  submit = async (e) => {
    e.preventDefault();
    const product = { ...this.state };
    try {
      let response = await axios.post(
        "http://localhost/html/longping/longping/src/php/Products.php",
        product
      );
      console.log(response.data);
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
            >
              <option>available</option>
              <option>unavailable</option>
            </select>
          </div>
          <br />
          <div className="input-group row justify-content-center">
            <button type="button" className="btn btn-success" onClick={this.submit}>
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
