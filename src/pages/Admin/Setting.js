import React, { useEffect } from 'react';
import { Layout, Form, Input, Button, Row, Col, Card, message } from 'antd';
import Sidebar from '../../components/Navbar/Sidebar';
import axios from 'axios';
import './Setting.css';

const { Header, Sider, Content } = Layout;

const Settings = () => {
  const [form] = Form.useForm();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/user');
        form.setFieldsValue({
          email: response.data.email,
        });
      } catch (error) {
        message.error('Failed to fetch user data');
      }
    };
  
    fetchUserData();
  }, [form]);
  

  const handleSubmit = async (values) => {
    try {
      const userId = 1; 
      const response = await axios.put(`http://127.0.0.1:8000/api/register/${userId}`, values);
      message.success(response.data.message);
    } catch (error) {
      if (error.response && error.response.data) {
        message.error(`Update failed: ${error.response.data.message || 'Unknown error'}`);
      } else {
        message.error('Update failed! Please try again later.');
      }
    }
  };
  

  return (
    <Layout className="user-settings">
      <Sider width={256} className="sidebar">
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="header">
          <div className="header-content">
            <h2>Admin Settings</h2>
          </div>
        </Header>

        <Content className="settings-content">
          <Row justify="center">
            <Col span={12}>
              <Card title="Admin Settings" className="settings-card">

                <Form form={form} layout="vertical"  onFinish={handleSubmit}>

                  <Form.Item  label="Email"  name="email"  rules={[{ required: true, message: 'Please input your email!' }]}>
                    <Input placeholder="Enter your email" />
                  </Form.Item>

                  <Form.Item  label="New Password"  name="password"  rules={[{ required: false, message: 'Please input your new password!' }]}>
                    <Input.Password placeholder="Enter new password" />
                  </Form.Item>

                  <Form.Item  label="Confirm Password"  name="password_confirmation"  rules={[{ required: false, message: 'Please confirm your new password!' }]}>
                    <Input.Password placeholder="Confirm new password" />
                  </Form.Item>

                  <Form.Item>
                    <Button type="primary" htmlType="submit"> Update </Button>
                  </Form.Item>

                </Form>

              </Card>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Settings;
