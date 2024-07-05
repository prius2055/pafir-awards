import React, { useState, useEffect } from 'react';

import Logo from '../img/pafir-logo.png';

import { useDispatch, useSelector } from 'react-redux';
import { getAllNominations } from '../store/nominateSlice';
import { useNavigate, Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isLoading, error, nominationsArray } = useSelector(
    (state) => state.nominations
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getAllNominations());
  }, [dispatch]);

  const financeNominations = nominationsArray?.nominations?.filter(
    (nomination) => nomination.field.toLowerCase() === 'finance'
  );
  const ictNominations = nominationsArray?.nominations?.filter(
    (nomination) => nomination.field.toLowerCase() === 'ict'
  );
  const estateNominations = nominationsArray?.nominations?.filter(
    (nomination) => nomination.field.toLowerCase() === 'real estate'
  );

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    navigate('/login');
    console.log(error);
  }

  return (
    <div>
      <div className="dashboard-header">
        <Link to="/">
          <img src={Logo} alt="Pafir logo" className="dashboard-logo" />
        </Link>
      </div>
      <div className="dashboard">
        <h2>Nomination results</h2>
        <div>
          {nominationsArray && nominationsArray?.nominations?.length > 0 && (
            <table className="styled-table">
              <thead>
                <tr className="table-heading">
                  <th colSpan="4">Finance</th>
                </tr>
                <tr>
                  <th>Sn</th>
                  <th>Name of nominee</th>
                  <th>Category</th>
                  <th>Nominator's Email</th>
                </tr>
              </thead>
              <tbody>
                {financeNominations?.map((finance, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{finance.nomineeName}</td>
                    <td>{finance.category}</td>
                    <td>{finance.userEmail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {nominationsArray && nominationsArray?.nominations?.length > 0 && (
            <table className="styled-table">
              <thead>
                <tr className="table-heading">
                  <th colSpan="4">ICT</th>
                </tr>
                <tr>
                  <th>Sn</th>
                  <th>Name of Nominee</th>
                  <th>Category</th>
                  <th>Nominator's Email</th>
                </tr>
              </thead>
              <tbody>
                {ictNominations?.map((finance, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{finance.nomineeName}</td>
                    <td>{finance.category}</td>
                    <td>{finance.userEmail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {nominationsArray && nominationsArray?.nominations?.length > 0 && (
            <table className="styled-table">
              <thead>
                <tr className="table-heading">
                  <th colSpan="4">Real estate</th>
                </tr>
                <tr>
                  <th>Sn</th>
                  <th>Name of Nominee</th>
                  <th>Category</th>
                  <th>Nominator's Email</th>
                </tr>
              </thead>
              <tbody>
                {estateNominations?.map((finance, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{finance.nomineeName}</td>
                    <td>{finance.category}</td>
                    <td>{finance.userEmail}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>

        {!nominationsArray && nominationsArray?.nominations?.length === 0 && (
          <p>No nomination at this time</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;
