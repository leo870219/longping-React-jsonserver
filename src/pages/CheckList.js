import React from "react";
import { Container, Row, Table } from "react-bootstrap";
import OrderList from "components/OrderList";
import axios from "commons/axios";

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
      await axios.post("/orderlist", orderdata);
      alert('訂單成功送出')
      setTimeout(() => {
        this.props.history.push("/");
      }, 5000);
    } catch (error) {
      console.log(error);
    }
  };
  render() {
    return (
      <Container>
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
