// @ts-ignore
import classes from './NavigationBar.module.css';
import { NavLink } from 'react-router-dom';

const NavItem = (props) => {
  return (
    <NavLink
      to={`/${props.path}`}
      className={({ isActive }) => (isActive ? classes.active : undefined)}
      end
    >
      <div className={classes['nav-item']}>{props.title}</div>
    </NavLink>
  );
};

export default NavItem;
