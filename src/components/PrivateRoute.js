import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ component: Component, roles, ...rest }) => {
  const user = JSON.parse(localStorage.getItem('user')); // Assuming user info is stored in localStorage

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (roles && roles.indexOf(user.role) === -1) {
    return <Navigate to="/" />; // Redirect to home if user doesn't have the right role
  }

  return <Component {...rest} />;
};

export default PrivateRoute;
