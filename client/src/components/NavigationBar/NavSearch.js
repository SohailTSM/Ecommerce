// @ts-ignore
import classes from './NavigationBar.module.css';
// @ts-ignore
import searchSVG from './search.svg';

const NavSearch = () => {
  return (
    <div className={classes['nav-search']}>
      <form action=''>
        <input type='text' />
        <button>
          <img src={searchSVG} alt='' />
        </button>
      </form>
    </div>
  );
};

export default NavSearch;
