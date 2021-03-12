import React from "react";
import ReactDOM from "react-dom";
import Router from "Router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "css/app.scss";
import "css/css.css";
import "commons/auth";
ReactDOM.render(
  <div>
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
    <Router />
  </div>,
  document.getElementById("root")
);
