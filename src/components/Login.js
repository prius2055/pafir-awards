import React, { useState } from 'react';

const Login = () => {
  const [loginDetails, setLoginDetails] = useState({
    username: '',
    password: '',
  });

  const loginHandler = (e) => {
    e.preventDefault();
    console.log(loginDetails);
  };

  return (
    <div className="login-container">
      <div className="login">
        <h1>Admin login</h1>
        <form onSubmit={loginHandler}>
          <label htmlFor="username">
            <input
              type="text"
              name="username"
              className="name-input"
              onChange={(e) => {
                setLoginDetails((prev) => ({
                  ...prev,
                  username: e.target.value,
                }));
              }}
            />
          </label>
          <label htmlFor="password">
            <input
              type="password"
              name="password"
              className="password-input"
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
    </div>
  );
};

export default Login;
