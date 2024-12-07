import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContext';
import Navbar from '../../components/Navbar/Navbar';
import contactus from '../../assets/bg1.png';
import { Card, Button, message } from 'antd';
import axios from 'axios';
import './user.css';

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const navigate = useNavigate();

  const handlePayment = async () => {
    try {
      // Send the cart items to the backend
      for (let item of cart) {
        const response = await axios.post('http://127.0.0.1:8000/api/orders', {
          name: item.name,
          price: item.price,
          quantity: item.quantity,
        });

        if (response.status !== 201) {
          throw new Error('Failed to place the order.');
        }
      }

      message.success('Order placed successfully!');
      navigate('/Payment');
    } catch (error) {
      console.error('Error placing order:', error);
      message.error('Failed to place the order. Please try again.');
    }
  };

  return (
    <section>
      <Navbar />
      <div className="contactus-container">
        <img src={contactus} alt="Contact Us" className="contactus-image" />
        <div className="contactus-overlay">
          <div className="contactus-text">
            <h1>CART</h1>
            <h3>Contact Us For Any Inquiry Related To Our Products</h3>
          </div>
        </div>
      </div>
      <div className="order-container">
        <Card
          title="Your Orders"
          bordered={false}
          style={{
            width: 400,
          }}
        >
          {cart.map((item) => (
            <Card
              key={item.id}
              type="inner"
              title={`Order - ${item.name}`}
            >
              <p>Order ID - {item.id}</p>
              <p>Total Price - Rs. {item.price * item.quantity}</p>
              <p>Order Items - {item.name} (Quantity {item.quantity})</p>
              <Button type="primary" onClick={handlePayment}>order conform</Button>
              <Button type="primary" onClick={() => removeFromCart(item.id, item.type)} style={{ marginLeft: '10px' }}>
                Remove
              </Button>
            </Card>
          ))}
        </Card>
      </div>
    </section>
  );
};

export default Cart;
