import React, { Component } from "react";
import { Layout, Menu } from "antd";
import {
  MailOutlined,
  AppstoreOutlined,
  SettingOutlined,
} from "@ant-design/icons";

import "./home.less";

const { Header, Footer, Sider, Content } = Layout;
const { SubMenu } = Menu;

export default class Admin extends Component {
  handleClick(e) {
    console.log("click", e);
  }
  render() {
    return (
      <Layout className="container">
        <Header>react</Header>
        <Layout className="sider">
          <Sider>
            <Menu
              onClick={this.handleClick}
              style={{ width: 256 }}
            //  mode="vertical"
            mode='inline'
              theme="dark"
            >
              <SubMenu
                key="sub1"
                icon={<MailOutlined />}
                title="Navigation One"
              >
                <Menu.ItemGroup title="Item 1">
                  <Menu.Item key="1">Option 1</Menu.Item>
                  <Menu.Item key="2">Option 2</Menu.Item>
                </Menu.ItemGroup>
                <Menu.ItemGroup title="Iteom 2">
                  <Menu.Item key="3">Option 3</Menu.Item>
                  <Menu.Item key="4">Option 4</Menu.Item>
                </Menu.ItemGroup>
              </SubMenu>
              <SubMenu
                key="sub2"
                icon={<AppstoreOutlined />}
                title="Navigation Two"
              >
                <Menu.Item key="5">Option 5</Menu.Item>
                <Menu.Item key="6">Option 6</Menu.Item>
                <SubMenu key="sub3" title="Submenu">
                  <Menu.Item key="7">Option 7</Menu.Item>
                  <Menu.Item key="8">Option 8</Menu.Item>
                </SubMenu>
              </SubMenu>
              <SubMenu
                key="sub4"
                icon={<SettingOutlined />}
                title="Navigation Three"
              >
                <Menu.Item key="9">Option 9</Menu.Item>
                <Menu.Item key="10">Option 10</Menu.Item>
                <Menu.Item key="11">Option 11</Menu.Item>
                <Menu.Item key="12">Option 12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content>Content</Content>
        </Layout>
      </Layout>
    );
  }
}
