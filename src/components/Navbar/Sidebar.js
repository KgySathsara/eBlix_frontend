import React, { useState } from 'react';
import { Drawer, Menu, Button } from 'antd';
import { MenuOutlined, HomeOutlined, AppstoreAddOutlined, ShoppingCartOutlined, PictureOutlined, MessageOutlined, SettingOutlined } from '@ant-design/icons';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className="sidebar-container">
      <Button 
        type="primary" 
        icon={<MenuOutlined />} 
        className="sidebar-toggle"
        onClick={showDrawer}
      />
      <Drawer
        title="Menu"
        placement="left"
        closable={true}
        onClose={onClose}
        visible={visible}
        width={256}
        className="sidebar-drawer"
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          theme="dark"
          className="sidebar-menu"
        >
          <Menu.Item key="1" icon={<HomeOutlined />}><Link to="/admin">Dashboard
          </Link></Menu.Item>
          <Menu.Item key="2" icon={<AppstoreAddOutlined />}><Link to="/admin/products">Product Management
          </Link></Menu.Item>
          <Menu.Item key="3" icon={<ShoppingCartOutlined />}><Link to="/admin/orders">Order Management
          </Link></Menu.Item>
          <Menu.Item key="4" icon={<PictureOutlined />}><Link to="/admin/gallery">Gallery
          </Link></Menu.Item>
          <Menu.Item key="5" icon={<MessageOutlined />}><Link to="/admin/message">Messages
          </Link></Menu.Item>
          <Menu.Item key="6" icon={<SettingOutlined />}><Link to="/admin/setting">Settings
          </Link></Menu.Item>
        </Menu>
      </Drawer>
    </div>
  );
};

export default Sidebar;
