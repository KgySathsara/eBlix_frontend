import React, { useEffect, useState } from 'react';
import { Button, Form, Input, Col, Row, message } from 'antd';
import Navbar from '../../components/Navbar/Navbar';
import axios from 'axios';
import contactus from '../../assets/a.jpg';
import './Account.css';

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 24 },
  },
};

const AccountSetting = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false);
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user');
        const { id, name, email } = response.data;
        setUserId(id); // Store user ID
        form.setFieldsValue({
          username: name,
          email: email,
        });
      } catch (error) {
        message.error('Failed to fetch user data');
      }
    };
  
    fetchUserData();
  }, [form]);
  

  const onFinish = async (values) => {
    if (!userId) {
      message.error('User ID is not available');
      return;
    }

    setLoading(true);
    try {
      await axios.put(`http://127.0.0.1:8000/register/${userId}`, {
        name: values.username, // Use username as the field name
        email: values.email,
        password: values.password,
      });
      message.success('User updated successfully');
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Failed to update user';
      message.error(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <div className="contactus-container">
        <img src={contactus} alt="Contact Us" className="contactus-image" />
        <div className="contactus-overlay">
          <div className="contactus-text">
            <h1>ACCOUNT SETTING</h1>
            <h3>Contact Us For Any Inquiry Related To Our Products</h3>
          </div>
        </div>
      </div>
      <div className="account-setting-container">
        <h2 className="account-setting-header">Your Personal Information</h2>
        <Form
          {...formItemLayout}
          form={form}
          className="account-form"
          onFinish={onFinish}
        >
          <Row gutter={16}>
            <Col span={12}>
              <Form.Item
                name="username" // Correct field name
                label="Username"
                rules={[{ required: true, message: 'Please input your username!' }]}
                className="account-form-item"
              >
                <Input placeholder='Username' />
              </Form.Item>
            </Col>
            <Col span={12}>
              <Form.Item
                name="email"
                label="Email"
                rules={[{ required: true, type: 'email', message: 'Please input your email!' }]}
                className="account-form-item"
              >
                <Input placeholder='Email' />
              </Form.Item>
            </Col>
          </Row>
          <Form.Item
            name="password"
            label="Password"
            rules={[{ min: 8, message: 'Password must be at least 8 characters long!' }]}
            className="account-form-item"
          >
            <Input.Password placeholder='Password (leave blank to keep unchanged)' />
          </Form.Item>
          <Form.Item wrapperCol={{ span: 24, style: { textAlign: 'center' } }}>
            <Button type="primary" htmlType="submit" loading={loading}>
              Update Details
            </Button>
          </Form.Item>
        </Form>
      </div>
    </>
  );
};

export default AccountSetting;
