import React from 'react';
import { Link } from 'react-router-dom';
import { BsCheck2 } from 'react-icons/bs';
import './SuccessPage.css';

const SuccessPage = () => {
  return (
    <div className="success-container">
      <div className="success">
        <div className="success-grp">
          <BsCheck2 className="success-icon" />
          <p>Success</p>
        </div>
        <div className="success-link-grp">
          <p>Congratulations, your entries has been saved</p>
          <div className="success-links">
            <Link className="s-link" to="/">
              Back to Homepage
            </Link>
            <Link className="s-link" to="/nominate">
              Continue nomination
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessPage;
