import React from "react";
import { Container,Button, Form} from "react-bootstrap";
class Login extends React.Component {
  render() {
    return (
      <Container fluid className='login-wrapper brown bg-lighten-5'>
        <Form className='login-box px-3 py-4 rounded bg-white box-shadows align-self-center'>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>電子郵件</Form.Label>
            <Form.Control type="email" placeholder="請輸入電子郵件" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>密碼</Form.Label>
            <Form.Control type="password" placeholder="請輸入密碼" />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="記住我" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Container>
    );
  }
}

export default Login;
