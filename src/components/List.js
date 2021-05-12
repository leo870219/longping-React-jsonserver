import React from "react";
import { Card, Row, Col } from "react-bootstrap";
class List extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { id, username, usertel, takeway, takedate, taketime, carts } =
      this.props.list;
    return (
      <Card>
        <Row>
          <Col>
            <p>
              訂單編號:#{id}
              {takeway}
            </p>
          </Col>

          <Col>
            <button
              className="message-to-user"
              onClick={() => this.props.fineshOrderList(id, username)}
            >
              <p>通知顧客</p>
            </button>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>訂購人姓名{username}</p>
          </Col>
          <Col>
            <p>訂購人電話{usertel}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{takeway}</p>
          </Col>
          <Col>
            <p>{takedate}</p>
          </Col>
          <Col>
            <p>{taketime}</p>
          </Col>
        </Row>

        {carts.map((item) => {
          return (
            <Row key={item.productId}>
              <Col>
                <p>{item.name}</p>
              </Col>
              <Col>
                <p>{item.price}</p>
              </Col>
              <Col>
                <p>{item.mount}</p>
              </Col>
              <Col>
                <p>{item.mount * parseInt(item.price)}</p>
              </Col>
            </Row>
          );
        })}
        <Row>
          <Col>
            <p>總金額:</p>
          </Col>
          <Col>
            <p>
              {carts
                .map((item) => item.mount * parseInt(item.price))
                .reduce((previous, current) => {
                  return previous + current;
                }, 0)}
            </p>
          </Col>
        </Row>
      </Card>
    );
  }
}

export default List;
