import React from "react";

let Footer = (props) => (
  <footer>
    <div className="container">
      <div className="row">
        <nav className="col-4">
          <p>連結</p>
          <div className="btn-group-vertical">
            <a href="index.html">關於龍品</a>
            <a href="product.html">產品介紹</a>
            <a href="orderInformation.html">線上訂餐</a>
          </div>
        </nav>
        <div className="col">
          <p>聯絡我們</p>
          <p>
            台中市北區北平路二段68之1號
            <br />
            tel:(04)2291-8106
          </p>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
