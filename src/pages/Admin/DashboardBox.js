import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'antd';
import axios from 'axios';

const DashboardBox = () => {
  const [productCount, setProductCount] = useState(0);
  const [galleryCount, setGalleryCount] = useState(0);
  const [messageCount, setMessageCount] = useState(0);

  useEffect(() => {
    const fetchProductCount = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/product-count');
        setProductCount(response.data.count);
      } catch (error) {
        console.error('Error fetching product count:', error);
      }
    };

    const fetchGalleryCount = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/gallery-count');
        setGalleryCount(response.data.count);
      } catch (error) {
        console.error('Error fetching gallery count:', error);
      }
    };

    const fetchMessageCount = async () => {
      try {
        const response = await axios.get('http://localhost:8000/api/message-count');
        setMessageCount(response.data.count);
      } catch (error) {
        console.error('Error fetching message count:', error);
      }
    };

    fetchProductCount();
    fetchGalleryCount();
    fetchMessageCount();
  }, []);

  return (
    <Row gutter={16}>
      <Col span={8}>
        <Card title={<span style={{ color: 'blue' }}>Products</span>} bordered={false}>
          {productCount}
        </Card>
      </Col>
      <Col span={8}>
        <Card title={<span style={{ color: 'green' }}>Gallery</span>} bordered={false}>
          {galleryCount}
        </Card>
      </Col>
      <Col span={8}>
        <Card title={<span style={{ color: 'red' }}>Messages</span>} bordered={false}>
          {messageCount}
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardBox;
