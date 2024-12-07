import React from 'react';
import { Layout, Row, Col } from 'antd';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer style={{ textAlign: 'center', backgroundColor: '#001529', color: '#fff', padding: '20px 50px' }}>
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <h3 style={{ color: '#fff' }}>About Us</h3>
          <p>
          At Kgy Sathsara, we offer high-quality fashion that blends style, comfort, and durability. Discover timeless classics and trendy designs, crafted with care and a commitment to sustainability.
        </p>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <h3 style={{ color: '#fff' }}>Contact</h3>
          <p>Email: info@example.com</p>
          <p>Phone: +123 456 7890</p>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <h3 style={{ color: '#fff' }}>Follow Us</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
              <FaFacebookF size={24} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
              <FaTwitter size={24} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
              <FaInstagram size={24} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: '#fff' }}>
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </Col>
      </Row>
      <div style={{ marginTop: '20px' }}>
        ©2024 Design by eBlix technology . All Rights Reserved.
      </div>
    </Footer>
  );
};

export default CustomFooter;
