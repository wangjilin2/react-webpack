import React, { Component } from "react";
import { Form, Input, Button, Checkbox, message } from "antd";
import {Redirect} from 'react-router-dom';
import { UserOutlined } from "@ant-design/icons";
import memoryUtils from "../../utils";
import storageUtils from '../../utils/storageUtils';

import "./login.less";
class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: null,
    };
  }
  formRef = React.createRef();
  onFinish = (value) => {
    if (value.username === "admin" && value.password === "admin") {
      const user = value;
      memoryUtils.user = user; // 存在内存
      storageUtils.saveUser(user)
      this.props.history.replace("/");
      return true;
    } else if (value.username !== "admin") {
      message.error("用户名错误！");
      return false;
    } else {
      message.error("密码错误！");
      return false;
    }
  };
  onFinishFailed = ({ values, errorFields, outOfDate }) => {
    console.log("11111", values, errorFields, outOfDate);
  };
  onReset = () => {
    this.formRef.current.resetFields();
  };

  render() {
    const user=memoryUtils.user;
    if(Object.keys(user).length){
      console.log('redirect admin',user);
      return <Redirect to='/'/>
    }
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
        //  initialValues={{ remember: true }}
        onFinish={this.onFinish}
        onFinishFailed={this.onFinishFailed}
        ref={this.formRef}
        //  onFieldsChange={this.handleChange}
        // onValuesChange={this.handleValue}
      >
        <Form.Item
          label="姓名"
          name="username"
          rules={[
            { required: true, message: "请输入您的姓名" },
            { min: 4, message: "用户名至少4位" },
            { max: 12, message: "用户名至多12位" },
            {
              pattern: /^[a-zA-z0-9_]+$/,
              message: "用户名必须是英文数字下划线组成",
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} />
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
          {/* <Button htmlType="button" onClick={this.onReset}>
            重置
          </Button> */}
          <Button type="primary" htmlType="submit">
            登陆
          </Button>
        </Form.Item>
      </Form>
    );
  }
}

export default Login;
