import React from "react";
import { Button, Form } from "react-bootstrap";

export default function UserProfile(props) {
const logout = () =>{
    global.auth.logout();
    props.close('logout')
}

  return (
    <Form>
      <h1>Profile</h1>
      <Form.Group>
        <Form.Label className="d-flex">Nickname</Form.Label>
        <Form.Control disabled defaultValue={props.user.nickname} />
      </Form.Group>
      <Form.Group>
        <Form.Label className="d-flex">Email</Form.Label>
        <Form.Control disabled defaultValue={props.user.email} />
      </Form.Group>
      <Form.Group>
        <Form.Label className="d-flex">Type</Form.Label>
        <Form.Control
          disabled
          defaultValue={props.user.type === 1 ? "Manager" : "User"}
        />
      </Form.Group>
      <Form.Group className="d-flex justify-content-center">
        <Button className="btn btn-danger" onClick={logout}>登出</Button>
        <Button
          className="btn btn-dark"
          onClick={() => {
            props.close();
          }}
        >
          關閉
        </Button>
      </Form.Group>
    </Form>
  );
}
