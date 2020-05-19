import React from "react";
import { Container, Button, Form, Col } from "react-bootstrap";
class Register extends React.Component {
  render() {
    return (
      <Container fluid className="d-flex justify-content-center bg-lighten-5">
        <Form className="register-box rounded box-shadows my-5 px-4 py-4 bg-white">
          <Form.Group controlId="formRegisterName ">
            <Form.Label>姓名</Form.Label>
            <Form.Control placeholder="請輸入姓名" />
          </Form.Group>

          <Form.Group controlId="formRegisterPhone">
            <Form.Label>手機號碼</Form.Label>
            <Form.Control placeholder="請輸入行動電話" />
          </Form.Group>

          <Form.Group controlId="formRegisterEmail">
            <Form.Label>電子郵件</Form.Label>
            <Form.Control type="email" placeholder="請輸入電子郵件" />
          </Form.Group>

          <Form.Group controlId="formRegisterPassword">
            <Form.Label>密碼</Form.Label>
            <Form.Control type="password" placeholder="請輸入密碼" />
          </Form.Group>

          <Form.Group controlId="formRegisterCkeckPassword">
            <Form.Label>確認密碼</Form.Label>
            <Form.Control type="password" placeholder="請再次輸入密碼" />
          </Form.Group>
          
          <Form.Group controlId="formRegisterSex">
            <Form.Label>性別</Form.Label>
            <Form.Control as="select" value="請選擇您的性別">
              <option>請選擇您的性別</option>
              <option>男</option>
              <option>女</option>
            </Form.Control>
          </Form.Group>

          <Form.Label>地址</Form.Label>

          <Form.Row>
            <Col>
              <Form.Group controlId="formRegisterCounty">
                <Form.Control as="select" value="縣市">
                  <option>縣市</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group controlId="formRegisterArea">
                <Form.Control as="select" value="區域">
                  <option>區域</option>
                  <option>...</option>
                </Form.Control>
              </Form.Group>
            </Col>
          </Form.Row>

          <Form.Group controlId="formRegisterAddress">
            <Form.Control  placeholder="請輸入完整地址" />
          </Form.Group>

          <Button variant="primary" type="submit">
            註冊
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Register;
