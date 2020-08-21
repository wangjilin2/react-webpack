import React, { Component } from "react";
import { Form, Input, Button, Checkbox ,message} from "antd";

import "./login.less";
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: null,
    };
  }

  handleSubmit=()=> {
      const {value}=this.state;
      console.log(value);
      if(value.username==="admin" && value.password==="admin"){
          this.props.history.push('/admin')
          return true;
      }else if(value.username!=="admin"){
        message.error('用户名错误！');
        return false;
      }else {
        message.error('密码错误！');
        return false;
      }
  }
  handleValue=(changedValues, allValues)=>{
    this.setState({
        value:allValues
    })
  }


  render() {
    const onFinish = (values) => {
      console.log("Success:", values);
    };

    const onFinishFailed = (errorInfo) => {
      console.log("Failed:", errorInfo);
    };
    const layout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 16 },
    };
    const tailLayout = {
      wrapperCol: { offset: 8, span: 16 },
    };

    return (
      <Form
        className="login"
        {...layout}
        name="basic"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        //  onFieldsChange={this.handleChange}
        onValuesChange={this.handleValue}
      >
        <Form.Item
          label="姓名"
          name="username"
          rules={[{ required: true, message: "请输入您的姓名" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="密码"
          name="password"
          rules={[{ required: true, message: "请输入你的密码" }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
          <Checkbox>记住密码</Checkbox>
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" onClick={this.handleSubmit}>
            登陆
          </Button>
        </Form.Item>
      </Form>
    );
  }
}
