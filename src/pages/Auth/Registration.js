/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Form, Input, Button, Checkbox, Typography } from 'antd';
import { UserOutlined, LockOutlined, MailOutlined } from '@ant-design/icons';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Registration.css';

const { Title } = Typography;

const Register = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    if (values.password !== values.confirm) {
      alert('Passwords do not match');
      return;
    }

    try {
      const response = await axios.post('http://127.0.0.1:8000/api/register', {
        name: values.username,
        email: values.email,
        password: values.password,
        password_confirmation: values.confirm,
      });
      alert('Registration successful!');
      navigate('/login');
    } catch (error) {
      console.error('Error during registration:', error.response || error.message);
      if (error.response && error.response.data) {
        alert(`Registration failed: ${error.response.data.message || 'Unknown error'}`);
      } else {
        alert('Registration failed! Please try again later.');
      }
    }
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <Title level={2}>Create an Account</Title>
          <p>Please fill in the details to create your account</p>
        </div>
        <Form
          name="register"
          className="register-form"
          initialValues={{ remember: true }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your Username!' }]}
          >
            <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              { required: true, message: 'Please input your Email!' },
              { type: 'email', message: 'The input is not valid E-mail!' }
            ]}
          >
            <Input prefix={<MailOutlined className="site-form-item-icon" />} placeholder="Email" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your Password!' }]}
            hasFeedback
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item
            name="confirm"
            dependencies={['password']}
            hasFeedback
            rules={[
              { required: true, message: 'Please confirm your Password!' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(new Error('The two passwords do not match!'));
                },
              }),
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Confirm Password"
            />
          </Form.Item>
          <Form.Item>
            <Form.Item name="agreement" valuePropName="checked" noStyle>
              <Checkbox>
                I have read the <a href="">agreement</a>
              </Checkbox>
            </Form.Item>
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit" className="register-form-button">
              Register
            </Button>
          </Form.Item>
          <Form.Item>
            <div className="login-register">
              If you have an Account? <a href="/login">Login now!</a>
            </div>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
};

export default Register;
