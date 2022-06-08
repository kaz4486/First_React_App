import styles from './NavBar.module.scss';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link to='/' className='fa fa-tasks'>
          <some-text></some-text>
        </Link>
      </div>
      <div className={styles.links}>
        <ul>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to='/'
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to='/favorite'
            >
              Favorite
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? styles.linkActive : undefined
              }
              to='/about'
            >
              About
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
