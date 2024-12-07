import React from 'react';
import { Layout, Dropdown, Menu, Avatar, Button, notification } from 'antd';
import { UserOutlined, LogoutOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for redirection
import Sidebar from '../../components/Navbar/Sidebar';
import logo from '../../assets/a.jpg';
import DashboardBox from '../../pages/Admin/DashboardBox';
import './Dashboard.css'; // Ensure you have the CSS file for custom styling

const { Header, Sider, Content } = Layout;

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleMenuClick = (e) => {
    if (e.key === 'logout') {
      // Clear user data from local storage
      localStorage.removeItem('user');
      
      // Show notification alert
      notification.info({
        message: 'Admin Sign Out',
        description: 'You have been successfully signed out.',
        placement: 'topRight', // Position the notification
        duration: 2, // Duration in seconds
      });

      // Redirect to login page after notification
      setTimeout(() => {
        navigate('/login');
      }, 2000); // Delay redirection to allow notification to be seen
    }
  };

  const userMenu = (
    <Menu onClick={handleMenuClick}>
      <Menu.Item key="profile" icon={<UserOutlined />}>
        Admin
      </Menu.Item>
      <Menu.Item key="logout" icon={<LogoutOutlined />}>
        Logout
      </Menu.Item>
    </Menu>
  );

  return (
    <Layout className="admin-dashboard">
      <Sider width={256} className="sidebar">
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="header">
          <div className="header-content">
            <h2>Admin Dashboard</h2>
            <Dropdown overlay={userMenu} trigger={['click']}>
              <Button 
                type="text" 
                icon={<Avatar icon={<UserOutlined />} />} 
                className="user-avatar"
              />
            </Dropdown>
          </div>
        </Header>
        <Content className="dashboard-content">
          <div className="cover-photo">
            <img src={logo} alt='logo' />
          </div>
          <div className="content-container">
            <DashboardBox />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
