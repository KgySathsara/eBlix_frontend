import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../../components/Navbar/Sidebar'; // Ensure this component is styled properly
import './OrderManagement.css'; // Optional, if you have additional custom styles
import OrderManagementBox from '../../pages/Admin/OrderManagementBox';

const { Header, Sider, Content } = Layout;

const OrderManagement = () => {
  return (
    <Layout className="order-management">
      <Sider width={256} className="sidebar">
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="header">
          <div className="header-content">
            <h2>Order Management</h2>
          </div>
        </Header>
        <Content className="management-content">
          <OrderManagementBox />
        </Content>
      </Layout>
    </Layout>
  );
};

export default OrderManagement;
