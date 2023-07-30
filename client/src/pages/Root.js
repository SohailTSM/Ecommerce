import React from 'react';
import NavigationBar from './../components/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <>
      <NavigationBar />
      
      <Outlet />
    </>
  );
};

export default Root;
