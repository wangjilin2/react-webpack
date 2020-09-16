import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Layout } from "antd";

import memoryUtils from "../../utils";

import "./home.less";
import Left from "../../component/left-nav";
import Head from "../../component/header";
import Main from "../main/main";
import Category from "../category/category";
import Bar from "../charts/bar";
import Line from "../charts/line";
import Pie from "../charts/pie";
import Product from "../product/product";
import Role from "../role/role";
import User from "../user/user";
import Breadcrumb from "../breadcrumb/breadcrumb";

const { Header, Footer, Sider, Content } = Layout;

export default class Admin extends Component {
  handleClick(e) {
    console.log("click", e);
  }
  render() {
    const user = memoryUtils.user;
    if (!user || user._id) {
      return <Redirect to="/login" />;
    }
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
              <Switch>
                <Route path="/main" component={Main} />
                <Route path="/category" component={Category} />
                <Route path="/charts/bar" component={Bar} />
                <Route path="/charts/line" component={Line} />
                <Route path="/charts/pie" component={Pie} />
                <Route path="/product" component={Product} />
                <Route path="/role" component={Role} />
                <Route path="/user" component={User} />
                <Redirect to="/main" />
              </Switch>
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
