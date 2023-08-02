import React from 'react';
import NavItem from './NavItem';
import NavTitle from './NavTitle';
import NavSearch from './NavSearch';
// @ts-ignore
import classes from './NavigationBar.module.css';

const NavigationBar = () => {
  return (
    <>
      <nav className={classes['nav-bar']}>
        <NavTitle></NavTitle>
        <NavSearch></NavSearch>
        <section>
          <NavItem id="Home" title='Home'></NavItem>
          <NavItem id="Cart" title='Cart'></NavItem>
          <NavItem id="Orders" title='Orders'></NavItem>
          <NavItem id="Profile" title='Profile'></NavItem>
        </section>
      </nav>
    </>
  );
};

export default NavigationBar;
