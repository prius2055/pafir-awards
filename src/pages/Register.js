import React, { useState } from 'react';
import './Login.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userRegister } from '../store/userSlice';

const Register = () => {
  const { isLoading, error } = useSelector((store) => store.user);

  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerHandler = async (e) => {
    e.preventDefault();
    const result = await dispatch(userRegister(loginDetails));
    const { payload } = result;
    if (payload.code === 200) {
      navigate('/login');
      console.log(result);
    }
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div className="register">
      <h1>Admin Register</h1>
      <form onSubmit={registerHandler} className="login-form">
        <label htmlFor="username" className="login-grp">
          Username
          <input
            type="text"
            name="username"
            className="login-input"
            onChange={(e) => {
              setLoginDetails((prev) => ({
                ...prev,
                username: e.target.value,
              }));
            }}
          />
        </label>
        <label htmlFor="password" className="login-grp">
          Password
          <input
            type="password"
            name="password"
            className="login-input"
            onChange={(e) => {
              setLoginDetails((prev) => ({
                ...prev,
                password: e.target.value,
              }));
            }}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Register;
