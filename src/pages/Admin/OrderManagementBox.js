import React, { useEffect, useState } from 'react';
import { Table, message, Button, Popconfirm } from 'antd';
import axios from 'axios';

const OrderManagementBox = () => {
  const [data, setData] = useState([]);

  const fetchOrders = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/orders');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching orders:', error);
      message.error('Failed to load orders. Please try again later.');
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/api/orders/${id}`);
      message.success('Order deleted successfully');
      setData(data.filter((item) => item.id !== id));
    } catch (error) {
      console.error('Error deleting order:', error);
      message.error('Failed to delete the order. Please try again.');
    }
  };

  const columns = [
    {
      title: 'Order Name',
      dataIndex: 'name',
      sorter: (a, b) => a.name.length - b.name.length,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
      sortDirections: ['descend', 'ascend'],
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
    },
    {
      title: 'Actions',
      render: (text, record) => (
        <Popconfirm
          title="Are you sure you want to delete this order?"
          onConfirm={() => handleDelete(record.id)}
          okText="Yes"
          cancelText="No"
        >
          <Button type="primary" danger>
            Delete
          </Button>
        </Popconfirm>
      ),
    },
  ];

  const onChange = (pagination, filters, sorter, extra) => {
    console.log('params', pagination, filters, sorter, extra);
  };

  return (
    <Table
      columns={columns}
      dataSource={data}
      onChange={onChange}
      rowKey="id"
    />
  );
};

export default OrderManagementBox;
