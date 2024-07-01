import React from 'react';

const Register = () => {
  return (
    <div className="login-container">
      <div className="login">
        <h1>Admin Register</h1>
        <form>
          <label htmlFor="username">
            <input type="text" name="username" className="name-input" />
          </label>
          <label htmlFor="password">
            <input type="password" name="password" className="password-input" />
          </label>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
