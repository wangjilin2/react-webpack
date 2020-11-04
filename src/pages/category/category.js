import React, { Component } from "react";
import { Button } from "antd";

import { Consumer } from "../../utils/contextUtils";
import ee from "../../utils/listenerUtils";

class category extends Component {
  state = {
    color: "red",
  };
  componentDidMount() {
    console.log(ee);
    this.event1 = ee.addListener("changeColor", (color) => {
      this.setState({
        color,
      });
      console.log(color);
    });
  }
  subFn(color) {
    return () => {
      ee.emit("changeColor", color);
    };
  }
  //   componentWillUnmount(){
  //       ee.removeListener(this.event1)
  //   }
  render() {
    const { color } = this.state;

    return (
      <div>
        <Consumer>
          {(name) => (
            <div
              style={{
                border: "1px solid blue",
                width: "60%",
                margin: "20px auto",
                textAlign: "center",
              }}
            >
              <p style={{ color: color }}>子组件。获取父组件的值:{name}</p>
              <Button onClick={this.subFn("red")}>兄嘚1变red</Button>
              <Button onClick={this.subFn("blue")}>兄嘚1变blue</Button>
            </div>
          )}
        </Consumer>
      </div>
    );
  }
}

export default category;
