import React, { useState, useEffect } from 'react';
import { Card, Button, Popconfirm, message } from 'antd';
import { DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

const MessageBox = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/api/contact-messages')
      .then(response => {
        setMessages(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the messages:', error);
      });
  }, []);

  const deleteMessage = (id) => {
    axios.delete(`http://localhost:8000/api/contact-messages/${id}`)
      .then(response => {
        if (response.status === 200) {
          message.success('Message deleted successfully!');
          setMessages(messages.filter(message => message.id !== id));
        } else {
          message.error('Unexpected response from the server.');
        }
      })
      .catch(error => {
        console.error('There was an error deleting the message:', error);
        message.error('There was an error deleting the message.');
      });
  };


  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '16px' }}>
      {messages.map((message) => (
        <Card
          key={message.id}
          title={`Message from: ${message.name}`}
          bordered={false}
          style={{ width: 300 }}
          extra={
            <Popconfirm
              title="Are you sure you want to delete this message?"
              onConfirm={() => deleteMessage(message.id)}
              okText="Yes"
              cancelText="No"
            >
              <Button type="text" icon={<DeleteOutlined />} />
            </Popconfirm>
          }
        >
          <p><strong>Email:</strong> {message.email}</p>
          <p><strong>Phone:</strong> {message.phone}</p>
          <p><strong>Subject:</strong> {message.subject}</p>
          <p><strong>Message:</strong> {message.message}</p>
        </Card>
      ))}
    </div>
  );
};

export default MessageBox;
