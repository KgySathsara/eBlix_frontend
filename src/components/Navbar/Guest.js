import React, { useState } from 'react';
import { Menu, Space, Button } from 'antd';
import { CaretDownFilled } from '@ant-design/icons';
import { Link } from 'react-router-dom';
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

const Guest = () => {
  const [current, setCurrent] = useState('1');

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
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

  return (
    <div className="navbar-container">
      <img src={logo} alt="logo" className="navbar-logo" />
      <Menu
        onClick={onClick}
        selectedKeys={[current]}
        mode="horizontal"
        className="navbar-menu"
      >
        {items.map((item) => renderMenuItem(item))}
      </Menu>
      <div className="navbar-right">
        <Space size={24}>
          <Button type="primary">
            <Link to="/login">Login</Link>
          </Button>
        </Space>
      </div>
    </div>
  );
};

export default Guest;
