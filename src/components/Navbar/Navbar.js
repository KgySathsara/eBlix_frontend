import React, { useState } from 'react';
import { Menu, Avatar, Badge, Space, Dropdown } from 'antd';
import { CaretDownFilled, UserOutlined, ShoppingCartOutlined, PoweroffOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'; 
import './Navbar.css';

const items = [
  {
    label: <Link to="/">HOME</Link>,
    key: '1',
  },
  {
    label: <Link to="/UserAbout">ABOUT</Link>,
    key: '2',
  },
  {
    label: 'NEW FACTION',
    key: '3',
    dropdown: true,
    children: [
      {
        label: <Link to="/MensFactionStore">Mens Faction Store</Link>,
        key: '7',
      },
      {
        label: <Link to="/WomensFactionStore">Womens Faction Store</Link>,
        key: '8',
      },
      {
        label: <Link to="/BabyFactionsStore">Baby Factions Store</Link>,
        key: '9',
      },
      {
        label: <Link to="/FactionStore">Factions Store</Link>,
        key: '10',
      },
    ],
  },
  {
    label: <Link to="/UserProduct">PRODUCTS</Link>,
    key: '4',
  },
  {
    label: <Link to="/UserGallery">GALLERY</Link>,
    key: '5',
  },
  {
    label: <Link to="/Contactus">CONTACT US</Link>,
    key: '6',
  },
];

const settings = [
  {
    label: <Link to="/Cart">Cart</Link>,
    key: 'cart',
    icon: <ShoppingCartOutlined />,
  },
  {
    label: <Link to="/AccountSetting">Account Settings</Link>,
    key: 'account',
  },
  {
    label: 'Logout',
    key: 'logout',
    icon: <PoweroffOutlined />,
  },
];

const Navbar = () => {
  const [current, setCurrent] = useState('1');
  const navigate = useNavigate(); 

  const onClick = (e) => {
    console.log('click ', e);
    if (e.key === 'logout') {
      handleLogout();
    } else {
      setCurrent(e.key);
    }
  };

  const handleLogout = () => {
    alert('User Logged Out !!');
    navigate('/'); 
  };

  const renderMenuItem = (item) => {
    if (item.children) {
      return (
        <Menu.SubMenu
          key={item.key}
          title={
            <>
              {item.label}
              {item.dropdown && <CaretDownFilled style={{ marginLeft: 8 }} />}
            </>
          }
        >
          {item.children.map((child) => renderMenuItem(child))}
        </Menu.SubMenu>
      );
    }
    return <Menu.Item key={item.key}>{item.label}</Menu.Item>;
  };

  const renderSettingsMenu = (
    <Menu className="usermenu" onClick={onClick}>
      {settings.map(setting => (
        <Menu.Item key={setting.key} icon={setting.icon}>
          {setting.label}
        </Menu.Item>
      ))}
    </Menu>
  );

  return (
    <div className="navbar-container">
      <img src={logo} alt="logo" className="navbar-logo" />
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        className="navbar-menu"
        theme="dark"
      >
        {items.map((item) => renderMenuItem(item))}
      </Menu>
      <div className="navbar-right">
        <Space size={24}>
          <Dropdown overlay={renderSettingsMenu} trigger={['click']}>
            <Badge>
              <Avatar shape="circle" icon={<UserOutlined />} />
            </Badge>
          </Dropdown>
        </Space>
      </div>
    </div>
  );
};

export default Navbar;
