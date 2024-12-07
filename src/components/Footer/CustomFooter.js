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
          <p>We are a leading company in our industry, committed to providing top-quality products and services to our customers. Our mission is to drive innovation and deliver exceptional value through our dedicated team of professionals.</p>
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
