import React from 'react';
import NavigationBar from './../components/NavigationBar/NavigationBar';
import { Outlet } from 'react-router-dom';
// @ts-ignore
import classes from "./Root.module.css";

const Root = () => {
  return (
    <>
      <NavigationBar />
      <div className={classes['main-container']}>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
