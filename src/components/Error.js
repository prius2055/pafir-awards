import React from 'react';
import './Error.css';

const Error = () => {
  return (
    <div className="error">
      <p>There was an error with processing your entries</p>
      <p>Kindly fill all the details correctly and re-submit</p>
      <p>Email address must be of the format johndoe@domainname.com</p>
    </div>
  );
};

export default Error;
