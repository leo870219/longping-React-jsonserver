import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import OrderList from "components/OrderList";
import axios from "commons/axios";
import emailjs from "emailjs-com";
import { init } from "emailjs-com";
init("user_SC5LteHAAjQgwfXNomwA9");

class CheckList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      username: this.props.location.state.username,
      usertel: this.props.location.state.usertel,
      usermail: this.props.location.state.usermail,
      takeway: this.props.location.state.takeway,
      takedate: this.props.location.state.takedate,
      taketime: this.props.location.state.taketime,
      deliveryplace: this.props.location.state.deliveryplace,
      carts: [],
    };
  }
  componentDidMount() {
    const date = new Date();
    const id = `0000${date.getDate()}${date.getHours()}${date.getMinutes()}${date.getSeconds()}`;
    this.setState({ id: id });
    const user = global.auth.getUser() || {};
    axios
      .get(`/carts?userId=${user.email}`)
      .then((res) => this.setState({ carts: res.data }));
  }
  totalPrice = () => {
    const totalPrice = this.state.carts
      .map((cart) => cart.mount * parseInt(cart.price))
      .reduce((a, value) => a + value, 0);
    return totalPrice;
  };

  orderSubmit = async () => {
    try {
      const orderdata = { ...this.state };
      let templateParams = {
        list_id: this.state.id,
        username: this.state.username,
        takeway: this.state.takeway,
        takedate: this.props.location.state.takedate,
        taketime: this.props.location.state.taketime,
        cart: this.orderTableList(),
      };
      emailjs
        .send("service_keegrso", "template_8h061cv", templateParams)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      emailjs
        .send("service_keegrso", "template_ds5cp8g", templateParams)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
      await axios.post("/orderlist", orderdata);
      alert("訂單成功送出");
      setTimeout(() => {
        this.props.history.push("/");
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };
  orderTableList = () => {
    const tableContent = this.state.carts
      .map(
        (item) =>
          `<tr><td>${item.name}</td><td>數量 : ${
            item.mount
          }</td><td>單項總金額: ${item.mount * parseInt(item.price)}</td></tr>`
      )
      .reduce((previous, current) => previous + current);
    const tableList = `<table width='500'>${tableContent}<tr><td>總金額: ${this.totalPrice()}</td></tr></table>`;
    return tableList;
  };
  render() {
    return (
      <Container className="check-page">
        <h1>訂單確認</h1>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th colSpan="4">顧客資訊:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>訂購人姓名:{this.props.location.state.username}</td>
              <td>訂購人電話:{this.props.location.state.usertel}</td>
              <td colSpan="2">
                訂購人電子郵件:{this.props.location.state.usermail}
              </td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colSpan="4">取餐資訊:</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>取餐方式:{this.props.location.state.takeway}</td>
              <td>取餐日期:{this.props.location.state.takedate}</td>
              <td>取餐時間:{this.props.location.state.taketime}</td>
              {this.props.location.state.deliveryplace ? (
                <td>取餐地址:{this.props.location.state.deliveryplace}</td>
              ) : null}
            </tr>
          </tbody>
          <thead>
            <tr>
              <th colSpan="4">訂購餐點:</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="4">
                <Row>
                  {this.state.carts.map((cart) => (
                    <OrderList key={cart.id} cart={cart} />
                  ))}
                </Row>
              </td>
            </tr>
          </tbody>
        </Table>
        <Row className="cart-total justify-content-end">
          <span className="total-price">Total:${this.totalPrice()}</span>
          <button className="submit-order" onClick={this.orderSubmit}>
            送出訂單
          </button>
        </Row>
      </Container>
    );
  }
}

export default CheckList;
