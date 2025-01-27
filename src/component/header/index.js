import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "antd";
import moment from "moment";

import memoryUtil from "../../utils/index";
import axios from "../../axios/axios";
import "./header.less";

export default class LeftNav extends Component {
  state = {
    sysTime: "",
    dayPictureUrl: "",
    weather: "",
  };
  
  // componentDidMount() {
  //   this.time=setInterval(() => {
  //     let sysTime = moment().format("YYYY-MM-DD HH:mm:ss");
  //     this.setState({ sysTime });
  //   }, 1000);
  // }
  // componentWillUnmount(){
  //   if(this.time!=null){
  //     clearInterval(this.time)
  //   }
  // }
  // getWeatherAPI(){
  //   console.log(11111111111);
  //   const district_id=510107;
  //   axios.jsonp({url:`http://api.map.baidu.com/weather/v1/?district_id=${district_id}&data_type=all&ak=hkDZjd8sFmXjvCg9cWYZ6XpOeEubcfaO`}).then(res=>{console.log(res)})
  // }
  render() {
    // const{sysTime}=this.state;
    const user = memoryUtil.user;
    return (
      <div className="container_header">
        <Link to="/main">
          <h1>react</h1>
        </Link>
        <div className="header_left">
          <div className="header_user">
            hello {user.username} {}
          </div>
          <div className="header_back">退出</div>
          
        </div>
      </div>
    );
  }
}
