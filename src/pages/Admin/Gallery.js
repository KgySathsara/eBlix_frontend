import React from 'react';
import { Layout } from 'antd';
import Sidebar from '../../components/Navbar/Sidebar'; // Ensure this component is styled properly
import './OrderManagement.css'; // Optional, if you have additional custom styles
import GalleryBox from '../../pages/Admin/GalleryBox';

const { Header, Sider, Content } = Layout;

const Gallery = () => {
  return (
    <Layout className="order-management">
      <Sider width={256} className="sidebar">
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="header">
          <div className="header-content">
            <h2>Gallery</h2>
          </div>
        </Header>
        <Content className="management-content">
            <GalleryBox />
        </Content>
      </Layout>
    </Layout>
  );
};

export default Gallery;
