import React from 'react';
import Login from '../../components/Login';
import Dashboard from '../../components/Dashboard';
// import Register from '../../components/Register';

const Admin = () => {
  return (
    <div>
      <Dashboard />
      <Login />
      {/* <Register /> */}
    </div>
  );
};

export default Admin;
