import React from 'react';
import { Form, Input, Button, Select, Card, Row, Col } from 'antd';
import "./Payment.css";

const { Option } = Select;

const PaymentPage = () => {
  const handleFinish = (values) => {
    console.log('Payment Details:', values);
    // Add your payment processing logic here
  };

  return (
    <Row justify="center" align="middle" style={{ minHeight: '100vh', padding: '20px' }}>
      <Col xs={24} sm={22} md={18} lg={14} xl={10}>
        <Card
          title="Payment Information"
          bordered={true}
          style={{ borderRadius: '10px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)' }}
        >
          <Form
            layout="vertical"
            onFinish={handleFinish}
            initialValues={{ cardType: 'visa' }}
          >
            <Form.Item
              label="Card Type"
              name="cardType"
              rules={[{ required: true, message: 'Please select your card type!' }]}
            >
              <Select placeholder="Select Card Type">
                <Option value="visa">Visa</Option>
                <Option value="mastercard">MasterCard</Option>
                <Option value="amex">American Express</Option>
              </Select>
            </Form.Item>

            <Form.Item
              label="Card Number"
              name="cardNumber"
              rules={[{ required: true, message: 'Please enter your card number!' }]}
            >
              <Input placeholder="Enter Card Number" />
            </Form.Item>

            <Form.Item
              label="Cardholder Name"
              name="cardholderName"
              rules={[{ required: true, message: 'Please enter the cardholder name!' }]}
            >
              <Input placeholder="Enter Cardholder Name" />
            </Form.Item>

            <Form.Item
              label="Expiration Date"
              name="expirationDate"
              rules={[{ required: true, message: 'Please enter the expiration date!' }]}
            >
              <Input placeholder="MM/YY" />
            </Form.Item>

            <Form.Item
              label="CVV"
              name="cvv"
              rules={[{ required: true, message: 'Please enter the CVV!' }]}
            >
              <Input placeholder="Enter CVV" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit" block style={{ borderRadius: '5px' }}>
                Pay Now
              </Button>
            </Form.Item>
          </Form>
        </Card>
      </Col>
    </Row>
  );
};

export default PaymentPage;
