import React from "react";
import axios from "commons/axios";
import { Container, Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

export default function Register(props) {
  const { register, errors, handleSubmit, watch } = useForm(); //register讓表單元件註冊到hook form
  const onSubmit = async (data) => {
    try {
      const { nickname,tel, email, password, gender } = data;
      const res = await axios.post("/auth/register", {
        nickname,
        tel,
        email,
        password,
        gender,
        type: 0,
      });
      const jwToken = res.data;
      global.auth.setToken(jwToken);
      toast.success("Register Success");
      props.history.push("/booking");
    } catch (error) {
      const message = error.response.data.message;
      toast.error(message);
    }
  };

  return (
    <Container fluid className="d-flex justify-content-center bg-lighten-5">
      <Form className="register-box rounded box-shadows my-5 px-4 py-4 bg-white">
        <Form.Group controlId="formRegisterName ">
          <Form.Label>姓名</Form.Label>
          <Form.Control
            name="nickname"
            className={`input ${errors.nickname && "border-danger"}`}
            placeholder="請輸入姓名"
            ref={register({
              required: "請輸入姓名",
              minLength: {
                value: 3,
                message: "請輸入正確中文姓名",
              },
              maxLength: {
                value: 3,
                message: "請輸入正確中文姓名",
              },
              pattern: {
                value: /[\u4e00-\u9fa5]/,
                message: "請輸入正確中文姓名",
              },
            })}
          />
          {errors.nickname && (
            <label className="text-danger d-flex">
              {errors.nickname.message}
            </label>
          )}
        </Form.Group>

        <Form.Group controlId="formRegisterPhone">
          <Form.Label>手機號碼</Form.Label>
          <Form.Control
            name="tel"
            className={`input ${errors.tel && "border-danger"}`}
            placeholder="請輸入行動電話"
            ref={register({
              required: "請輸入行動電話",
              maxLength: {
                value: 10,
                message: "無效行動電話",
              },
              pattern: {
                value: /^09\d{8}/,
                message: "無效行動電話",
              },
            })}
          />
          {errors.tel && (
            <label className="text-danger d-flex">{errors.tel.message}</label>
          )}
        </Form.Group>

        <Form.Group controlId="formRegisterEmail">
          <Form.Label>電子郵件</Form.Label>
          <Form.Control
            name="email"
            className={`input ${errors.email && "border-danger"}`}
            placeholder="請輸入電子郵件"
            ref={register({
              required: "請輸入電子郵件",
              pattern: {
                value: /^[A-Za-z0-9]+([_\\.][A-Za-z0-9]+)*@([A-Za-z0-9\\-]+\.)+[A-Za-z]{2,6}$/,
                message: "請輸入有效電子郵件",
              },
            })}
          />
          {errors.tel && (
            <label className="text-danger d-flex">{errors.email.message}</label>
          )}
        </Form.Group>

        <Form.Group controlId="formRegisterPassword">
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
        <Form.Group controlId="formRegisterCkeckPassword">
          <Form.Label>確認密碼</Form.Label>
          <Form.Control
            className={`input ${errors.checkPassword && "border-danger"}`}
            type="password"
            placeholder="請再次輸入密碼"
            name="checkPassword"
            ref={register({
              required: "請再次輸入密碼",
              validate: {
                message: (value) =>
                  value === watch("password") || "請確認是否與密碼相符",
              },
            })}
          />
          {errors.checkPassword && (
            <label className="text-danger d-flex">
              {errors.checkPassword.message}
            </label>
          )}
        </Form.Group>

        <Form.Group controlId="formRegisterSex">
          <Form.Label>性別</Form.Label>
          <Form.Control as="select">
            <option>男</option>
            <option>女</option>
          </Form.Control>
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          onClick={handleSubmit(onSubmit)}
        >
          註冊
        </Button>
      </Form>
    </Container>
  );
}
