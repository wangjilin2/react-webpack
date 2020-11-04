import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
  EditOutlined,
  AmazonOutlined,
} from "@ant-design/icons";

import "./leftnav.less";
import menuList from "../../config/menuConfig";

const { SubMenu } = Menu;

export default class LeftNav extends Component {
  //根据数组数组生成对应的标签数组
  //使用map+递归调用
  getMenuNodes_map = (menuList) => {
    return menuList.map((item) => {
      if (!item.children) {
        return (
          <Menu.Item key={item.key}>
            <Link to={item.key}>
              <MailOutlined />
              <span>{item.title}</span>
            </Link>
          </Menu.Item>
        );
      } else {
        return (
          <SubMenu
            key={item.key}
            icon={<AppstoreOutlined />}
            title={item.title}
          >
            {this.getMenuNodes_map(item.children)}
          </SubMenu>
        );
      }
    });
  };
// 使用reduce()+递归调用
  getMenuNodes=menuList=>{
    return menuList.reduce((pre,item)=>{
      if(!item.children){
        pre.push(( <Menu.Item key={item.key}>
          <Link to={item.key}>
            <MailOutlined />
            <span>{item.title}</span>
          </Link>
        </Menu.Item>))
      }else{
        pre.push((
          <SubMenu
            key={item.key}
            icon={<AppstoreOutlined />}
            title={item.title}
          >
            {this.getMenuNodes(item.children)}
          </SubMenu>
        ))
      }
      return pre;
    },[])
  }

  render() {
    return (
      <div>
        <Menu
          onClick={this.handleClick}
          className="container_leftnav"
          defaultSelectedKeys={["/home/main"]}
          // defaultOpenKeys={["sub1"]}
          mode="inline"
          theme="dark"
        >
          {this.getMenuNodes(menuList)}
          {/* <Menu.Item key="/main">
            <Link to="/main">
              <MailOutlined />
              <span>首页</span>
            </Link>
          </Menu.Item>
          <SubMenu key="sub2" icon={<AppstoreOutlined />} title="商品">
            <Menu.Item key="/category">
              <Link to="/category">
                <EditOutlined />
                品类管理
              </Link>
            </Menu.Item>
            <Menu.Item key="/product">
              <Link to="/product">
                <AmazonOutlined />
                商品管理
              </Link>
            </Menu.Item>
          </SubMenu>
        
            <Menu.Item key="/user">
              <Link to="/user">
                <SettingOutlined />
                用户管理
              </Link>
            </Menu.Item>
            <Menu.Item key="/role">
              <Link to="/role">
                <SettingOutlined />
                角色管理
              </Link>
            </Menu.Item>
         
          <SubMenu
            key="sub6"
            title={
              <span>
                <SettingOutlined />
                <span>图形图表</span>
              </span>
            }
          ></SubMenu> */}
        </Menu>
      </div>
    );
  }
}
