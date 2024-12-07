/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Form, Input, Button, Checkbox, Typography, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const { Title } = Typography;

const Login = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      const response = await axios.post('http://localhost:8000/api/login', {
        email: values.email,
        password: values.password,
      });

      if (response.status === 200) {
        message.success('Login successful!');
        const { user, role } = response.data;

        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify({ ...user, role }));

        // Handle successful login and redirect based on role
        if (role === 'admin') {
          navigate('/admin');
        } else {
          navigate('/GuestHome');
        }
      }
    } catch (error) {
      if (error.response) {
        // Server responded with a status other than 200 range
        message.error(error.response.data.message || 'Login failed. Please try again.');
      } else {
        // Something else happened while setting up the request
        message.error('An error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <Title level={2}>Welcome To Login Page</Title>
          <p>Please login to your account</p>
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="email"
            rules={[{ required: true, message: 'Please input your email!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <a className="login-form-forgot" href="">
              Forgot password?
            </a>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="login-form-button">
              Log in
            </Button>
            <div className="login-register">
              If you don't have an Account? <a href="/register">Register now!</a>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Login;
