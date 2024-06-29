import React, { useEffect, useState } from 'react';
import Fields from '../nomination-fields';
import { useNavigate } from 'react-router-dom';
import './Nominate.css';

const Nominate = () => {
  const [nominationDetails, setNominationDetails] = useState({
    nomineeName: '',
    nominationField: '',
    nominationCategory: '',
    userEmail: '',
  });
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (nominationDetails.nominationField) {
      const selectedField = Fields.find(
        (field) =>
          field.field.toLocaleUpperCase() ===
          nominationDetails.nominationField.toUpperCase()
      );
      if (selectedField) {
        setCategories(selectedField.categories);
      } else {
        setCategories([]);
      }
    }
  }, [nominationDetails.nominationField]);

  const nominationSubmitHandler = (e) => {
    e.preventDefault();
    console.log(nominationDetails);
    if (
      nominationDetails.nomineeName &&
      nominationDetails.nominationField &&
      nominationDetails.nominationCategory
    ) {
      navigate('/confirmation', { state: { ...nominationDetails } });
    } else {
      navigate('/nominate');
    }
  };

  return (
    <div className="nomination-container">
      <div className="nomination">
        <h1>Nomination form</h1>
        <form onSubmit={nominationSubmitHandler} className="nomination-form">
          <label htmlFor="name" className="form">
            Name of Nominee
            <input
              type="text"
              placeholder="Enter a name to nominate"
              className="form-field name-form-field"
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
              onChange={(e) => {
                setNominationDetails((prev) => ({
                  ...prev,
                  nominationField: e.target.value,
                }));
              }}
            >
              <option value="">Choose one</option>
              <option value="Finance">Finance</option>
              <option value="ICT">ICT</option>
              <option value="Real estate">Real estate</option>
            </select>
          </label>

          {nominationDetails.nominationField && categories.length > 0 && (
            <label htmlFor="category" className="form">
              Category
              <select
                name="category"
                className="form-field"
                onChange={(e) => {
                  setNominationDetails((prev) => ({
                    ...prev,
                    nominationCategory: e.target.value,
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
