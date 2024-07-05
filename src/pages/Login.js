import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { userLogin } from '../store/userSlice';
import { useNavigate, Link } from 'react-router-dom';
import Logo from '../img/pafir-logo.png';
import Register from './Register';
import './Login.css';

const Login = () => {
  const { isLoading, error } = useSelector((store) => store.user);

  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: '',
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loginHandler = async (e) => {
    e.preventDefault();
    const result = await dispatch(userLogin(loginDetails));
    const { payload } = result;
    if (payload.code === 200) {
      navigate('/admin');
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
    <div className="login-container">
      <div className="login-logo-container">
        <Link to="/">
          <img src={Logo} alt="Pafir logo" className="login-logo" />
        </Link>
      </div>

      <div className="login">
        <h1>Admin login</h1>
        <form onSubmit={loginHandler} className="login-form">
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

      <Register />
    </div>
  );
};

export default Login;
