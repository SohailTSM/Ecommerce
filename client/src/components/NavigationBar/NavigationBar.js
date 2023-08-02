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
          <NavItem id='Home' title='Home' path=''></NavItem>
          <NavItem id='Cart' title='Cart' path='cart'></NavItem>
          <NavItem id='Orders' title='Orders' path='orders'></NavItem>
          <NavItem id='Profile' title='Profile' path='profile'></NavItem>
        </section>
      </nav>
    </>
  );
};

export default NavigationBar;
