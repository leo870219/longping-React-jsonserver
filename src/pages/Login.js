import React from "react";
import axios from "commons/axios";
import { toast } from "react-toastify";
import { Container, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";

export default function Login(props) {
  const { register, errors, handleSubmit } = useForm(); //register讓表單元件註冊到hook form

  const onSubmit = async (data) => {
    try {
      const { email, password } = data;
      const res = await axios.post("auth/login", { email, password });
      const jwToken = res.data;
      global.auth.setToken(jwToken);
      toast.success("Login Success");
      props.history.push('/booking')
    } catch (error) {
      const message = error.response.data.message;
      toast.error(message);
    }
  };

  return (
    <Container fluid className="login-wrapper brown bg-lighten-5">
      <Form className="login-box px-3 py-4 rounded bg-white box-shadows align-self-center">
        <Form.Group controlId="formBasicEmail">
          <Form.Label>電子郵件</Form.Label>
          <Form.Control
            className={`input ${errors.email && "border-danger"}`}
            type="email"
            placeholder="請輸入電子郵件"
            name="email"
            ref={register({
              required: "請輸入電子郵件",
              pattern: {
                value: /^[A-Za-z0-9]+([_\\.][A-Za-z0-9]+)*@([A-Za-z0-9\\-]+\.)+[A-Za-z]{2,6}$/,
                message: "無效的電子郵件",
              },
            })}
          />
          {errors.email && (
            <label className="text-danger d-flex">{errors.email.message}</label>
          )}
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>密碼</Form.Label>
          <Form.Control
            className={`input ${errors.password && "border-danger"}`}
            type="password"
            placeholder="請輸入密碼"
            name="password"
            ref={register({
              required: "請輸入密碼",
              minLength: {
                value: 6,
                message: "請輸入超過六位數字或英文",
              },
            })}
          />
          {errors.password && (
            <label className="text-danger d-flex">
              {errors.password.message}
            </label>
          )}
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="記住我" />
        </Form.Group>
        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </Button>
      </Form>
    </Container>
  );
}
