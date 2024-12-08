import React from 'react';
import { Layout, Row, Col } from 'antd';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const { Footer } = Layout;

const CustomFooter = () => {
  return (
    <Footer style={{ backgroundColor: '#001529', color: '#fff', padding: '40px 20px' }}>
      <Row gutter={[16, 16]} justify="center">
        <Col xs={24} sm={12} md={8} style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#fff', marginBottom: '15px' }}>About Us</h3>
          <p style={{ color: '#d9d9d9' }}>
            At Kgy Sathsara, we offer high-quality fashion that blends style, comfort, and durability. Discover timeless
            classics and trendy designs, crafted with care and a commitment to sustainability.
          </p>
        </Col>
        <Col xs={24} sm={12} md={8} style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#fff', marginBottom: '15px' }}>Contact</h3>
          <p style={{ color: '#d9d9d9' }}>Email: info@example.com</p>
          <p style={{ color: '#d9d9d9' }}>Phone: +123 456 7890</p>
        </Col>
        <Col xs={24} sm={12} md={8} style={{ textAlign: 'center' }}>
          <h3 style={{ color: '#fff', marginBottom: '15px' }}>Follow Us</h3>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '15px' }}>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff', transition: 'transform 0.3s' }}
              className="social-icon"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff', transition: 'transform 0.3s' }}
              className="social-icon"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff', transition: 'transform 0.3s' }}
              className="social-icon"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: '#fff', transition: 'transform 0.3s' }}
              className="social-icon"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </Col>
      </Row>
      <div style={{ marginTop: '30px', textAlign: 'center', color: '#d9d9d9' }}>
        ©2024 Design by eBlix Technology. All Rights Reserved.
      </div>
    </Footer>
  );
};

export default CustomFooter;
