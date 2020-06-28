import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import styles from '../login.module.css';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div className={styles.navContainer}>
    <h1 className={styles.navLogo}>Rate Your Rep</h1>
    <nav>
      {isLoggedIn ? (
        <div className={styles.navLinksDiv}>
          {/* The navbar will show these links after you log in */}
          <Link className={styles.navText} to="/home">
            Home
          </Link>
          <a className={styles.navText} href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div className={styles.navLinksDiv}>
          <Link className={styles.navText} to="/signup">
            Sign Up
          </Link>
          <Link className={styles.navText} to="/login">
            Log In
          </Link>
        </div>
      )}
    </nav>
  </div>
);

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    isLoggedIn: !!state.user.id,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleClick() {
      dispatch(logout());
    },
  };
};

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
};
