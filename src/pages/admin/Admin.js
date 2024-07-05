import React, { useEffect } from 'react';
import Login from '../Login';
import Register from '../Register';
import Dashboard from '../Dashboard';
import { useSelector, useDispatch } from 'react-redux';
import { getAllNominations } from '../../store/nominateSlice';

const Admin = () => {
  const { isLoading, nominationsArray } = useSelector(
    (store) => store.nominations
  );
  const { code } = nominationsArray;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllNominations());
  }, [dispatch]);

  if (isLoading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <Dashboard />
     <Login />
     {/* <Register /> */}
    </div>
  );
};

export default Admin;
