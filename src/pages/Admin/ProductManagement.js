import React, { useState, useEffect } from 'react';
import { Layout, Form, Input, Button, Table, Modal, message, Row, Col, Card, Upload } from 'antd';
import { PlusOutlined, DeleteOutlined, UploadOutlined, EditOutlined } from '@ant-design/icons';
import axios from 'axios';
import Sidebar from '../../components/Navbar/Sidebar';
import './ProductManagement.css';

const { Header, Sider, Content } = Layout;

const ProductManagement = () => {
  const [form] = Form.useForm();
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [fileList, setFileList] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get('http://localhost:8000/api/products')
      .then((response) => {
        setProducts(response.data.products);
      })
      .catch((error) => {
        console.error('Error fetching products:', error);
        message.error('Error fetching products!');
      });
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    form.resetFields();
    setFileList([]);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    form.setFieldsValue({
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
    });

    if (product.image_url) {
      setFileList([
        {
          uid: '-1',
          name: 'Existing Image',
          status: 'done',
          url: product.image_url,
        },
      ]);
    } else {
      setFileList([]);
    }

    setIsModalOpen(true);
  };

  const handleDeleteProduct = (productId) => {
    axios
      .delete(`http://localhost:8000/api/products/${productId}`)
      .then(() => {
        setProducts(products.filter((product) => product.id !== productId));
        message.success('Product deleted successfully');
      })
      .catch((error) => {
        console.error('Error deleting product:', error);
        message.error('Error deleting product!');
      });
  };

  const handleSubmit = (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('description', values.description);
    formData.append('price', values.price);
    formData.append('quantity', values.quantity);

    if (fileList.length > 0) {
      formData.append('upload', fileList[0].originFileObj);
    }

    axios
      .post('http://localhost:8000/api/products', formData)
      .then((response) => {
        setProducts([...products, response.data.product]);
        message.success('Product added successfully');
        setIsModalOpen(false);
        form.resetFields();
        setFileList([]);
      })
      .catch((error) => {
        console.error('Error adding product:', error);
        message.error('Error adding product!');
      });
  };

  const handleUpdate = (values) => {
    const formData = new FormData();
    formData.append('name', values.name);
    formData.append('description', values.description);
    formData.append('price', values.price);
    formData.append('quantity', values.quantity);

    if (fileList.length > 0 && fileList[0]?.originFileObj) {
      formData.append('upload', fileList[0].originFileObj);
    } else if (!fileList.length && editingProduct?.image_url) {
      formData.append('remove_image', true);
    }

    axios
      .put(`http://localhost:8000/api/products/${editingProduct.id}`, formData)
      .then((response) => {
        setProducts(
          products.map((product) =>
            product.id === editingProduct.id ? response.data.product : product
          )
        );
        message.success('Product updated successfully');
        setIsModalOpen(false);
        setFileList([]);
        form.resetFields();
      })
      .catch((error) => {
        console.error('Error updating product:', error);
        message.error('Error updating product!');
      });
  };

  const handleOk = () => {
    form
      .validateFields()
      .then((values) => {
        if (editingProduct) {
          handleUpdate(values);
        } else {
          handleSubmit(values);
        }
      })
      .catch((info) => {
        console.log('Validation Failed:', info);
      });
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setFileList([]);
  };

  const beforeUpload = (file) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      message.error('You can only upload image files!');
    }
    return isImage;
  };

  const columns = [
    {
      title: 'Product Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
    },
    {
      title: 'Quantity',
      dataIndex: 'quantity',
      key: 'quantity',
    },
    {
      title: 'Image',
      dataIndex: 'image_url',
      key: 'image_url',
      render: (url) =>
        url ? <img src={url} alt="Product" style={{ width: 100, height: 100, objectFit: 'cover' }} /> : 'N/A',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_, record) => (
        <>
        <Button type="link"  icon={<EditOutlined />}  onClick={() => handleEditProduct(record)}/>
          <Button type="link" danger icon={<DeleteOutlined />} onClick={() => handleDeleteProduct(record.id)} />
        </>
      ),
    },
  ];

  return (
    <Layout className="product-management">
      <Sider width={256} className="sidebar">
        <Sidebar />
      </Sider>
      <Layout>
        <Header className="header">
          <div className="header-content">
            <h2>Product Management</h2>
            <Button type="primary" icon={<PlusOutlined />} onClick={handleAddProduct}>
              Add Product
            </Button>
          </div>
        </Header>
        <Content className="management-content">
          <Row>
            <Col span={24}>
              <Card>
                <Table columns={columns} dataSource={products} rowKey="id" />
              </Card>
            </Col>
          </Row>
        </Content>

        <Modal
          title={editingProduct ? 'Edit Product' : 'Add Product'}
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
        >
          <Form form={form} layout="vertical">
            <Form.Item
              label="Product Name"
              name="name"
              rules={[{ required: true, message: 'Please input the product name!' }]}
            >
              <Input placeholder="Enter product name" />
            </Form.Item>

            <Form.Item
              label="Description"
              name="description"
              rules={[{ required: true, message: 'Please input the product description!' }]}
            >
              <Input.TextArea placeholder="Enter product description" />
            </Form.Item>

            <Form.Item
              label="Price"
              name="price"
              rules={[{ required: true, message: 'Please input the product price!' }]}
            >
              <Input type="number" placeholder="Enter product price" />
            </Form.Item>

            <Form.Item
              label="Quantity"
              name="quantity"
              rules={[{ required: true, message: 'Please input the product quantity!' }]}
            >
              <Input type="number" placeholder="Enter product quantity" />
            </Form.Item>

            <Form.Item
              label="Upload Product Image"
              name="upload"
              valuePropName="fileList"
              getValueFromEvent={(e) => (Array.isArray(e) ? e : e && e.fileList)}
            >
              <Upload
                beforeUpload={beforeUpload}
                listType="picture"
                fileList={fileList}
                onChange={({ fileList }) => setFileList(fileList)}
                onRemove={() => setFileList([])}
              >
                <Button icon={<UploadOutlined />}>Click to Upload</Button>
              </Upload>
            </Form.Item>
          </Form>
        </Modal>
      </Layout>
    </Layout>
  );
};

export default ProductManagement;
