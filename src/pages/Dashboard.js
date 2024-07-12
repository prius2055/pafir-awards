import React, { useEffect, useRef } from 'react';
import moment from 'moment/moment';
import Logo from '../img/pafir-logo.png';
import { useReactToPrint } from 'react-to-print';

import { useDispatch, useSelector } from 'react-redux';
import { getAllNominations } from '../store/nominateSlice';
import { useNavigate, Link } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
  const { isLoading, error, nominationsArray } = useSelector(
    (state) => state.nominations
  );

  const componentRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });

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

  console.log(ictNominations);
  console.log(ictNominations?.createdAt);

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
      <div className="dashboard" ref={componentRef}>
        <h2>Nomination results</h2>
        <div>
          {nominationsArray && nominationsArray?.nominations?.length > 0 && (
            <table className="styled-table">
              <thead>
                <tr className="table-heading">
                  <th colSpan="5">Finance</th>
                </tr>
                <tr>
                  <th>Sn</th>
                  <th>Name of nominee</th>
                  <th>Category</th>
                  <th>Nominator's Email</th>
                  <th>Nomination date/time</th>
                </tr>
              </thead>
              <tbody>
                {financeNominations?.map((finance, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{finance.nomineeName}</td>
                    <td>{finance.category}</td>
                    <td>{finance.userEmail}</td>
                    <td>{finance.createdAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {nominationsArray && nominationsArray?.nominations?.length > 0 && (
            <table className="styled-table">
              <thead>
                <tr className="table-heading">
                  <th colSpan="5">ICT</th>
                </tr>
                <tr>
                  <th>Sn</th>
                  <th>Name of Nominee</th>
                  <th>Category</th>
                  <th>Nominator's Email</th>
                  <th>Nomination date/time</th>
                </tr>
              </thead>
              <tbody>
                {ictNominations?.map((finance, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{finance.nomineeName}</td>
                    <td>{finance.category}</td>
                    <td>{finance.userEmail}</td>
                    <td>
                      {moment(finance.createdAt).format(
                        'YYYY-MM-DD / HH:mm:ss'
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {nominationsArray && nominationsArray?.nominations?.length > 0 && (
            <table className="styled-table">
              <thead>
                <tr className="table-heading">
                  <th colSpan="5">Real estate</th>
                </tr>
                <tr>
                  <th>Sn</th>
                  <th>Name of Nominee</th>
                  <th>Category</th>
                  <th>Nominator's Email</th>
                  <th>Nomination date/time</th>
                </tr>
              </thead>
              <tbody>
                {estateNominations?.map((finance, i) => (
                  <tr key={i}>
                    <td>{i + 1}</td>
                    <td>{finance.nomineeName}</td>
                    <td>{finance.category}</td>
                    <td>{finance.userEmail}</td>
                    <td>{finance.createdAt}</td>
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
      <button onClick={handlePrint}>Print this out!</button>
    </div>
  );
};

export default Dashboard;
