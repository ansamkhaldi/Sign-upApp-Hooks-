import React from 'react';
import * as S from './style';
import { Link } from 'react-router-dom';
import { Form } from 'antd';

const layout = {
  labelCol: {
    span: 24,
  },
  wrapperCol: {
    span: 24,
  },
};
const tailLayout = {
  wrapperCol: {
    span: 24,
  },
};

export default function SignUpValidation() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="basic"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Form.Item
        name="email"
        label="Your email"
        rules={[
          {
            type: 'email',
            message: 'The input is not valid E-mail!',
          },
          {
            required: false,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <S.InputEmail placeholder="Write your email" />
      </Form.Item>

      <S.FormItem
        label="Enter your password"
        name="password"
        rules={[
          {
            required: false,
            message: 'Please input your password!',
          },
        ]}
      >
        <S.InputPassword type="password" placeholder="•••••••••" />
      </S.FormItem>

      <Form.Item {...tailLayout}>
        <S.ButtonForm type="primary" htmlType="submit" block>
          Login
        </S.ButtonForm>
      </Form.Item>

      <Form.Item {...tailLayout} name="remember">
        <>
          Don’t have an account?
          {/* <S.RegisterBtn type="link">Register</S.RegisterBtn> */}
          {/* <Link to="/Login">Register</Link> */}
          <Link to="/">Register</Link>
        </>
      </Form.Item>
    </Form>
  );
}
