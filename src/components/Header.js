import React from "react";

let Header = (props) => (
  <header>
    <nav className="navbar navbar-expand-md navbar-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src={'images/logoRed.png'}
            width="60"
            height="40"
            className="d-inline-block align-top"
            alt="龍品快餐店"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                關於龍品
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/product">
                產品介紹
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/orderInformation">
                線上訂餐
              </a>
            </li>
          </ul>
          <span className="navbar-text ">
            <div className="row">
              {props.nickname ? (
                <span className="nickname nav-link">{props.nickname}</span>
              ) : (
                <React.Fragment>
                  <a className="nav-link" href="/login">
                    會員登入
                  </a>
                  <a className="nav-link" href="/register">
                    會員註冊
                  </a>
                </React.Fragment>
              )}

              <a
                className="nav-link"
                href="https://www.facebook.com/%E9%BE%8D%E5%93%81%E5%BF%AB%E9%A4%90%E5%BA%97-300982883289665/?ref=br_rs"
              >
                <i className="fab fa-facebook-square"></i>Facebook
              </a>
            </div>
          </span>
        </div>
      </div>
    </nav>
    <hr />
  </header>
);

export default Header;
