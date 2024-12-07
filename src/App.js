import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Auth/Login';
import Registration from './pages/Auth/Registration';
import GuestHome from './pages/User/GuestPage';
import Dashboard from './pages/Admin/Dashboard';
import ProductManagement from './pages/Admin/ProductManagement';
import OrderManagement from './pages/Admin/OrderManagement';
import UserHome from './pages/User/Home';
import UserAboutPrisco from './pages/User/Aboutus';
import UserProduct from './pages/User/Product';
import UserGallery from './pages/User/Gallery';
import Contactus from './pages/User/Contactus';
import Gallery from './pages/Admin/Gallery';
import Message from './pages/Admin/Message';
import Setting from './pages/Admin/Setting';
import AccountSetting from './pages/User/AccountSetting';
import Cart from './pages/User/Cart';
import MensFactionStore from './pages/User/InsidePage/MensFactionStore/MensFactionStore';
import WomensFactionStore from './pages/User/InsidePage/WomensFactionStore/WomensFactionStore';
import BabyFactionsStore from './pages/User/InsidePage/BabyFactionStore/BabyFactionsStore';
import FactionStore from './pages/User/InsidePage/FactionStore/FactionStore';
import PrivateRoute from './components/PrivateRoute'; // Import PrivateRoute
import './App.css';
import Payment from './pages/User/Payment';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/" element={<GuestHome />} />
        <Route path="/GuestHome" element={<UserHome />} />
        <Route path="/UserAboutPrisco" element={<UserAboutPrisco />} />
        <Route path="/UserProduct" element={<UserProduct />} />
        <Route path="/UserGallery" element={<UserGallery />} />
        <Route path="/Contactus" element={<Contactus />} />
        <Route path="/AccountSetting" element={<AccountSetting />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Payment" element={<Payment/>} />
        
        {/* Admin Routes */}
        <Route path="/admin" element={<PrivateRoute component={Dashboard} roles={['admin']} />} />
        <Route path="/admin/products" element={<PrivateRoute component={ProductManagement} roles={['admin']} />} />
        <Route path="/admin/orders" element={<PrivateRoute component={OrderManagement} roles={['admin']} />} />
        <Route path="/admin/gallery" element={<PrivateRoute component={Gallery} roles={['admin']} />} />
        <Route path="/admin/message" element={<PrivateRoute component={Message} roles={['admin']} />} />
        <Route path="/admin/setting" element={<PrivateRoute component={Setting} roles={['admin']} />} />

        <Route path="/MensFactionStore" element={<MensFactionStore />} />
        <Route path="/WomensFactionStore" element={<WomensFactionStore />} />
        <Route path="/BabyFactionsStore" element={<BabyFactionsStore />} />
        <Route path="/FactionStore" element={<FactionStore />} />
      </Routes>
    </Router>
  );
};

export default App;
