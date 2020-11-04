import React, { Component } from "react";
import { Row, Col, Breadcrumb } from "antd";
import { withRouter, Link } from "react-router-dom";
import moment from "moment";

import "./breadcrumb.less";
import axios from "../../axios/axios";

class BreadcrumbList extends Component {
  state = {
    sysTime: "",
    dayPictureUrl: "",
    weather: "",
    breadcrumbNameMap: {
      "/home/products": "商品",
      "/home/products/category": "品类管理",
      "/home/products/product":'商品管理',   
    },
  };
  // componentWillMount() {
  //   this.getWeatherAPIData();
  //   this.time = setInterval(() => {
  //     let sysTime = moment().format("YYYY-MM-DD HH:mm:ss");
  //     this.setState({ sysTime });
  //   }, 1000);
  // }
  // componentDidMount() {
  //   this.breadcrumbProps();
  // }
  breadcrumbProps = () => {
    const { breadcrumbNameMap } = this.state;
    const { location } = this.props;
    const pathSnippets = location.pathname.split("/").filter((i) => i);
    console.log(pathSnippets);
    const extraBreadcrumbItems = pathSnippets.map((_, index) => {
      const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
      console.log("url", url);
      return (
        <Breadcrumb.Item key={url}>
          <Link to={url}>{breadcrumbNameMap[url]}</Link>
        </Breadcrumb.Item>
      );
    });
    console.log("extraBreadcrumbItems", extraBreadcrumbItems);
    return extraBreadcrumbItems;
  };

  getWeatherAPIData() {
    const city = "南京";
    axios
      .jsonp({
        url:
          "http://api.map.baidu.com/telematics/v3/weather?location=" +
          encodeURIComponent(city) +
          "&output=json&ak=3p49MVra6urFRGOT9s8UBWr2",
      })
      .then((res) => {
        if (res.status == "success") {
          let data = res.results[0].weather_data[0];
          this.setState({
            dayPictureUrl: data.dayPictureUrl,
            weather: data.weather,
            city,
          });
        }
      });
  }
  breadcrumbItems = () => {
    const home = [
      <Breadcrumb.Item key="home">
        <Link to="/home/main">首页</Link>
      </Breadcrumb.Item>,
    ];
    return home.concat(this.breadcrumbProps())
  };
  render() {
    return (
      <div className="breadcrumb">
        <Row>
          <Col span={16} className="title">
            <Breadcrumb>{this.breadcrumbItems()}</Breadcrumb>
          </Col>
          <Col span={8} style={{ textAlign: "right" }}>
            <div className="header_back">
              {/* {this.state.sysTime}  */}
              <img src={this.state.dayPictureUrl} alt="" />
              {this.state.city} {this.state.weather}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default withRouter(BreadcrumbList);
