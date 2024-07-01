import React, { useEffect, useState } from 'react';
import Fields from '../nomination-fields';
import { useNavigate } from 'react-router-dom';
import './Nominate.css';
import Error from '../components/Error';
import Logo from '../img/pafir-logo.png';

const Nominate = () => {
  const [nominationDetails, setNominationDetails] = useState({
    nomineeName: '',
    field: '',
    category: '',
    userEmail: '',
  });
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    if (nominationDetails.field) {
      const selectedField = Fields.find(
        (field) =>
          field.field.toLocaleUpperCase() ===
          nominationDetails.field.toUpperCase()
      );
      if (selectedField) {
        setCategories(selectedField.categories);
      } else {
        setCategories([]);
      }
    }
  }, [nominationDetails.field]);

  const nominationSubmitHandler = (e) => {
    e.preventDefault();
    if (
      nominationDetails.nomineeName &&
      nominationDetails.field &&
      nominationDetails.category
    ) {
      navigate('/confirmation', { state: { ...nominationDetails } });
      setError(false);
    } else {
      navigate('/nominate');
      setError(true);
    }
  };

  return (
    <div className="nomination-container">
      <img src={Logo} alt="Logo" className="nomination-logo" />
      <div className="nomination">
        {error && (
          <Error
            msg={
              <div>
                <p>There was an error with processing your entries</p>
                <p>Kindly fill all the details correctly and re-submit</p>
              </div>
            }
          />
        )}
        <h1>Nomination form</h1>
        <form onSubmit={nominationSubmitHandler} className="nomination-form">
          <label htmlFor="name" className="form">
            Name of Nominee
            <input
              type="text"
              placeholder="Enter a name to nominate"
              className="form-field name-form-field"
              required
              onChange={(e) =>
                setNominationDetails((prev) => ({
                  ...prev,
                  nomineeName: e.target.value,
                }))
              }
            />
          </label>
          <label htmlFor="field" className="form">
            Field
            <select
              name="field"
              className="form-field"
              required
              onChange={(e) => {
                setNominationDetails((prev) => ({
                  ...prev,
                  field: e.target.value,
                }));
              }}
            >
              <option value="">Choose one</option>
              <option value="Finance">Finance</option>
              <option value="ICT">ICT</option>
              <option value="Real estate">Real estate</option>
            </select>
          </label>

          {nominationDetails.field && categories.length > 0 && (
            <label htmlFor="category" className="form">
              Category
              <select
                name="category"
                className="form-field"
                required
                onChange={(e) => {
                  setNominationDetails((prev) => ({
                    ...prev,
                    category: e.target.value,
                  }));
                }}
              >
                {categories.map((category, i) => (
                  <option key={i} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </label>
          )}
          <button type="submit">Nominate</button>
        </form>
      </div>
    </div>
  );
};

export default Nominate;

// {"_id":{"$oid":"668205e812a0a4d367889b55"},"nomineeName":"Okachukwu Iboma","field":"ICT","category":"Rising Star in ICT","userEmail":"prius@mail.com","createdAt":{"$date":{"$numberLong":"1719797224192"}},"updatedAt":{"$date":{"$numberLong":"1719797224192"}},"__v":{"$numberInt":"0"}}
