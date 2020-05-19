import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import App from "pages/App";
import Product from "pages/Products";
import OrderInformation from "pages/OrderInformation";
import Booking from "pages/Booking";
import Login from "pages/Login";
import Register from "pages/Register";
import NotFound from "pages/NotFound";
import Layout from "Layout";
const Router = () => (
  <BrowserRouter>
    <Layout>
      <Switch>
        <Route path="/" exact component={App}/>
        <Route path="/product" exact component={Product}/>
        <Route path="/orderinformation" exact component={OrderInformation}/>
        <Route path="/booking" exact component={Booking}/>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route component={NotFound} />
      </Switch>
    </Layout>
  </BrowserRouter>
);

export default Router;
