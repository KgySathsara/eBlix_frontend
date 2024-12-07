import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Hero from '../../components/Hero/Hero';
import CustomFooter from '../../components/Footer/CustomFooter';

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <Hero />
      <CustomFooter />
    </div>
  );
};

export default Home;
