import styles from './NavBar.module.scss';

const NavBar = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <a href='/' className='fa fa-tasks'>
          <some-text></some-text>
        </a>
      </div>
      <div className={styles.links}>
        <a href='/'>Home</a>
        <a href='/favorite'>Favorite</a>
        <a href='/about'>About</a>
      </div>
    </nav>
  );
};

export default NavBar;
