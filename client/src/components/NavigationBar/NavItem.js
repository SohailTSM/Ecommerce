// @ts-ignore
import classes from './NavigationBar.module.css';

const NavItem = (props) => {
  return <div className={classes['nav-item']}>{props.title}</div>;
};

export default NavItem;
