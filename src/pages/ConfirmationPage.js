import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { postNomination } from '../store/nominateSlice';
import './Nominate.css';
import Error from '../components/Error';
import Logo from '../img/pafir-logo.png';

const ConfirmationPage = () => {
  const { state } = useLocation();
  const [details, setDetails] = useState(state);
  const [errorMsg, setErrorMsg] = useState(false);
  const [duplicateEntryError, setDuplicateEntryError] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const email = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,63}$/;

  
  const handleSubmission = async (e) => {
    e.preventDefault();
    if (details.userEmail.match(email)) {
      try {
        const result = await dispatch(postNomination(details));
        const { payload } = result;

        if (payload.code === 200) {
          setErrorMsg(false);
          navigate('/success');
        } else if (payload.code === 400) {
          setErrorMsg(true);
          setDuplicateEntryError(payload.msg);
        } else {
          setErrorMsg(false);
          setDuplicateEntryError(null);
        }
      } catch (error) {
        setErrorMsg(true);
      }
    } else {
      setErrorMsg(true);
    }
  };

  return (
    <div className="nomination-container">
      <img src={Logo} alt="Logo" className="nomination-logo" />

      <div className="nomination ">
        {errorMsg && duplicateEntryError && <Error msg={duplicateEntryError} />}
        {errorMsg && !duplicateEntryError && (
          <Error
            msg={
              <div>
                <p>There was an error with processing your entries</p>
                <p>Kindly fill all the details correctly and re-submit</p>
                <p>
                  Email address must be of the format johndoe@domainname.com
                </p>
              </div>
            }
          />
        )}
        <h2>Please confirm your entry</h2>
        <form onSubmit={handleSubmission} className="nomination-form">
          <div className="confirmation-details">
            <div className="confirmation-detail">
              <p>Name of nominee</p>
              <span>{details.nomineeName}</span>
            </div>
            <div className="confirmation-detail">
              <p>Field</p>
              <span>{details.field}</span>
            </div>
            <div className="confirmation-detail">
              <p>Category</p>
              <span>{details.category}</span>
            </div>
          </div>
          <input
            type="email"
            className="form-field email-form-field"
            placeholder="Enter your email address to complete this process"
            required
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
