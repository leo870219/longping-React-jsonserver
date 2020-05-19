import React from "react";
import axios from "axios";
class OrderInformation extends React.Component {
  state = {
    id: "",
    takeway: "",
    takedate: "",
    taketime: "",
    username: "",
    usertel: "",
    usermail: "",
    address: "",
  };

  submit = (e) => {
    e.preventDefault();
    const orderinformation = { ...this.state };
    axios
      .post(
        "http://localhost/html/longping(React)/longping/src/php/connectMysql.php",
        orderinformation
      )
      .then((res) => {
        console.log(res.data);
      });
  };
  handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState({
      [name]: value,
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
                />
                外送
              </label>
              <label className="form-check-label">
                <input
                  type="radio"
                  className="form-check-input"
                  id="takeout"
                  name="takeway"
                  value="外帶"
                  onChange={this.handleChange}
                />
                外帶
              </label>
            </div>
            <br />
            <label>取餐時間:</label>
            <div className="form-inline">
              <input
                type="date"
                className="form-control col-sm-6 col-12"
                name="takedate"
                onChange={this.handleChange}
                value={this.state.takedate}
              />
              <select
                id="taketime"
                name="taketime"
                className="form-control col-sm-6 col-12"
                onChange={this.handleChange}
                value={this.state.taketime}
              >
                <option>15:00</option>
                <option>16:00</option>
                <option>17:00</option>
              </select>
            </div>
            <label>姓名:</label>
            <input
              type="text"
              className="form-control"
              name="username"
              onChange={this.handleChange}
              value={this.state.username}
            />
            <label>手機:</label>
            <input
              type="tel"
              className="form-control"
              pattern="(\d{4}-\d{6})"
              placeholder="手機號碼"
              title="例:0987-654321"
              name="usertel"
              size="30"
              onChange={this.handleChange}
              value={this.state.usertel}
            />

            <label>電子郵件:</label>
            <input
              type="email"
              name="usermail"
              className="form-control"
              onChange={this.handleChange}
              value={this.state.usermail}
            />
            <div id="demo">
              <label>外送地址:</label>

              <select
                className="form-control"
                name="city"
                id="city"
                size="1"
                placeholder="請選擇外送地址"
              >
                <option value="" className="none">
                  請先選擇縣市
                </option>
              </select>
              <select
                className="form-control"
                name="area"
                id="area"
                size="1"
              ></select>
              <select
                className="form-control"
                name="road"
                id="road"
                size="1"
              ></select>
              <input
                className="form-control"
                type="text"
                id="address"
                name="address"
                placeholder="外送地址"
                onChange={this.handleChange}
                value={this.state.address}
              />
              <input type="hidden" name="path" />
            </div>
            <button type="submit" className="btn btn-primary">
              選擇餐點
            </button>
          </form>
        </div>
      </section>
    );
  }
}

export default OrderInformation;
