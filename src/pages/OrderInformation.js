import React from "react";
import axios from "../commons/axios";
import DataPicker from "../components/DataPicker";

class OrderInformation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      takeway: "",
      takedate: "",
      taketime: "",
      username: "",
      usertel: "",
      usermail: "",
      address: "",
      display: "none",
      city: "台中",
      area: "",
      road: "",
      delivery: [],
      deliveryplace: "",
    };
  }

  componentDidMount() {
    const user = global.auth.getUser() || {};
    this.setState({
      username: user.nickname,
      usermail: user.email,
      usertel: user.tel,
    });
  }

  submit = async (e) => {
    e.preventDefault();
    const orderInformation = { ...this.state };
    const path = {
      pathname: "/checklist",
      state: orderInformation,
    };
    this.props.history.push(path);
  };

  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
    });
  };
  displayBlock = async () => {
    this.setState({ display: "" });
    try {
      const response = await axios.get("http://localhost:3000/road.json");
      this.setState({ delivery: response.data.address });
      this.setState({ area: response.data.address[0].area });
      this.setState({ road: response.data.address[0].road[0] });
      console.log(this.state.delivery[0].area);
    } catch (error) {
      console.log(error);
    }
  };
  displayNone = () => {
    this.setState({ display: "none" });
    this.setState({ delivery: [] });
    this.setState({ area: "" });
    this.setState({ road: "" });
  };
  dataOnclick = (value, name) => {
    this.setState({
      [name]: value,
    });
  };
  changeArea = (e) => {
    this.setState({ area: e.target.value });
    this.state.delivery.map((item, index) => {
      if (e.target.value === item.area) {
        this.setState({ road: item.road[0] });
      }
      return true;
    });
  };
  changeRoad = (e) => {
    this.setState({ road: e.target.value });
  };
  changeAddress = (e) => {
    this.setState({
      address: e.target.value,
      deliveryplace:
        this.state.city + this.state.area + this.state.road + e.target.value,
    });
  };

  render() {
    return (
      <section id="booking-second" className="orderInformationBackground">
        <div className="container">
          <form name="theForm" className="form" onSubmit={this.submit}>
            <div className="row justify-content-center">
              <h4>請輸入訂購資料</h4>
            </div>
            <label>取餐方式:</label>
            <div className="form-check-inline ">
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  id="delivery"
                  name="takeway"
                  value="外送"
                  onChange={this.handleChange}
                  onClick={this.displayBlock}
                  required="required"
                />
                外送
              </label>
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  id="takeout"
                  name="takeway"
                  value="自取"
                  onChange={this.handleChange}
                  onClick={this.displayNone}
                />
                自取
              </label>
            </div>
            <br />
            <label>取餐時間:</label>
            <div className="form-inline">
              <DataPicker
                onChange={this.dataOnclick}
                data={this.state.takedate}
                time={this.state.taketime}
              />
            </div>
            <label>中文姓名:</label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
              //pattern="^[\u4e00-\u9fa5]{2,4}$"
              required="required"
            />
            <label>手機:</label>
            <input
              type="tel"
              className="form-control"
              pattern="(09\d{8})"
              placeholder="手機號碼"
              title="例:0987-654321"
              name="usertel"
              size="30"
              onChange={this.handleChange}
              value={this.state.usertel}
              required="required"
            />

            <label>電子郵件:</label>
            <input
              type="email"
              name="usermail"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.usermail}
              required="required"
            />
            <div id="demo" className={this.state.display}>
              <label>外送地址:</label>

              <select
                className="form-control"
                name="city"
                id="city"
                size="1"
                placeholder="請選擇外送地址"
                onChange={this.handleChange}
              >
                <option>{this.state.city}</option>
              </select>
              <select
                className="form-control"
                name="area"
                id="area"
                size="1"
                onChange={this.changeArea}
                required={this.state.takeway === "外送" ? "required" : ""}
              >
                {this.state.delivery.map((item, index) => {
                  return <option key={index}>{item.area}</option>;
                })}
              </select>
              <select
                className="form-control"
                name="road"
                id="road"
                size="1"
                onChange={this.handleChange}
              >
                {this.state.delivery.map((item, index) => {
                  if (this.state.area === item.area) {
                    return item.road.map((item, index) => (
                      <option key={index}>{item}</option>
                    ));
                  }
                  return true;
                })}
              </select>
              <input
                className="form-control"
                type="text"
                id="address"
                name="address"
                placeholder="外送地址"
                onChange={this.changeAddress}
                value={this.state.address}
                required={this.state.takeway === "外送" ? "required" : ""}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              前往確認訂單
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default OrderInformation;
