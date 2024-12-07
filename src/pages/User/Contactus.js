import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import CustomFooter from '../../components/Footer/CustomFooter';
import contactus from '../../assets/bg1.png';
import { message, Form, Input, Button, Divider, Card } from 'antd';
import { PhoneFilled, MailFilled } from '@ant-design/icons';
import axios from 'axios';

const formItemLayout = {
  labelCol: { xs: { span: 24 }, sm: { span: 6 } },
  wrapperCol: { xs: { span: 24 }, sm: { span: 20 } },
};

const Contactus = () => {
  const [form] = Form.useForm(); // Create form instance

  const onFinish = (values) => {
    console.log('Form Values:', values);
    axios.post('http://localhost:8000/api/contact-us', values)
      .then(response => {
        console.log('Message sent successfully:', response.data);
        message.success('Your message has been sent successfully!');
        form.resetFields(); // Reset form fields after successful submission
      })
      .catch(error => {
        console.error('There was an error sending the message:', error);
        message.error('There was an error sending your message. Please try again.');
      });
  };

  return (
    <section>
      <Navbar />
      <div className="contactus-container">
        <img src={contactus} alt="Contactus" className="contactus-image" />
        <div className="contactus-overlay">
          <div className="contactus-text">
            <h1>CONTACT US</h1>
            <h3>Contact Us For Any Inquiry Related To our Products</h3>
          </div>
        </div>
      </div>
      <div className="contactus-content">
        <Card title={<span className="card-title">Quick Contact</span>} bordered={false} className="contactus-card">
          <p>Call us, Email us or Visit us!</p>
          <PhoneFilled />
          <p>+ 94 712 345 678</p>
          <p>+ 94 712 345 678</p>
          <Divider />
          <MailFilled />
          <p>fNqFP@example.com</p>
        </Card>

        <Form
          {...formItemLayout}
          form={form} // Connect form instance to the form component
          onFinish={onFinish}
          className="contactus-form"
        >
          <h1 className="form-title">We Love To Hear From You</h1>
          <h3 className="form-subtitle">Send your quotation requests, inquiries, suggestions and etc.</h3>
          <Divider />
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: 'Please input your full name!',
              },
            ]}
          >
            <Input placeholder="Full Name*" />
          </Form.Item>

          <Form.Item
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please input a valid email!',
              },
            ]}
          >
            <Input placeholder="Email*" />
          </Form.Item>

          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: 'Please input your phone number!',
              },
            ]}
          >
            <Input placeholder="Phone*" />
          </Form.Item>

          <Form.Item
            name="subject"
            rules={[
              {
                required: true,
                message: 'Please input the subject!',
              },
              {
                max: 40,
                message: 'Subject cannot be longer than 40 characters!',
              }
            ]}
          >
            <Input placeholder="Subject*" />
          </Form.Item>

          <Form.Item
            name="message"
            rules={[
              {
                required: true,
                message: 'Please input your message!',
                whitespace: true,
              },
              {
                max: 40,
                message: 'Message cannot be longer than 40 characters!',
              }
            ]}
          >
            <Input.TextArea placeholder="Message*" />
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 6,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <CustomFooter />
    </section>
  );
};

export default Contactus;
