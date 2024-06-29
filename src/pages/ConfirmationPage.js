import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Nominate.css';

const ConfirmationPage = () => {
  const { state } = useLocation();
  const [details, setDetails] = useState(state);
  const navigate = useNavigate();

  const handleSubmission = (e) => {
    e.preventDefault();
    navigate('/success');
  };

  return (
    <div className="nomination-container">
      <div className="nomination ">
        <h2>Please confirm your entry</h2>
        <form onSubmit={handleSubmission} className="nomination-form">
          <div className="confirmation-details">
            <div className="confirmation-detail">
              <p>Name of nominee</p>
              <span>{details.nomineeName}</span>
            </div>
            <div className="confirmation-detail">
              <p>Field</p>
              <span>{details.nominationField}</span>
            </div>
            <div className="confirmation-detail">
              <p>Category</p>
              <span>{details.nominationCategory}</span>
            </div>
          </div>
          <input
            type="email"
            className="form-field email-form-field"
            placeholder="Enter your email address to complete this process"
            onChange={(e) =>
              setDetails((prev) => ({ ...prev, userEmail: e.target.value }))
            }
          ></input>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ConfirmationPage;
