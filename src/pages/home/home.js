import React, { Component } from "react";
import { Redirect, Route, Switch, BrowserRouter } from "react-router-dom";
import { Layout, Table } from "antd";

import memoryUtils from "../../utils";
import { Provider } from "../../utils/contextUtils";

import "./home.less";
import Left from "../../component/left-nav";
import Head from "../../component/header";

import Breadcrumb from "../../component/breadcrumb/BreadcrumbList";
import Main from "../main/main";
import Category from "../category/category";
import Bar from "../charts/bar";
import Line from "../charts/line";
import Pie from "../charts/pie";
import Product from "../product/product";
import Role from "../role/role";
import User from "../user/user";
import NoMatch from "../noMatch/noMatch";
import request from "../../api/request";

import axios from "../../axios/axios";

const { Header, Footer, Sider, Content } = Layout;

export default class Admin extends Component {
  
  state = {
    value: undefined,
  };
  handleClick(e) {
    console.log("click", e);
  }
  componentDidMount() {
    this.getTableData()
  }
  getTableData(){
    axios
    .jsonp({ url: "http://localhost:53000/course" })
    .then((res) => console.log(res));
  }
  render() {
    const user = memoryUtils.user;
    if (!user || user._id) {
      return <Redirect to="/login" />;
    }
    const {value}=this.state;
    const name = "wangjilin";
    return (
      <Layout className="container">
        <Header>
          <Head />
        </Header>
        <Layout>
          <Sider>
            <Left />
          </Sider>
          <Layout>
            <Breadcrumb />
            <Content className="content">
              {this.getTableData()}
              <Provider value={name}>
                <BrowserRouter>
                  <Switch>
                    <Route path="/home/main" component={Main} />
                    <Route
                      path="/home/products/category"
                      component={Category}
                    />
                    <Route path="/home/charts/bar" component={Bar} />
                    <Route path="/home/charts/line" component={Line} />
                    <Route path="/home/charts/pie" component={Pie} />
                    <Route path="/home/products/product" component={Product} />
                    <Route path="/home/role" component={Role} />
                    <Route path="/home/user" component={User} />
                    <Route component={NoMatch} />
                    <Redirect to="/home/main" />
                  </Switch>
                </BrowserRouter>
              </Provider>
            </Content>
            <Footer style={{ textAlign: "center" }}>
              wwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
            </Footer>
          </Layout>
        </Layout>
      </Layout>
    );
  }
}
