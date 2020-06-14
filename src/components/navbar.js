import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div className="nav-container">
    <h1 className="nav-logo">Rate Your Rep</h1>
    <nav>
      {isLoggedIn ? (
        <div className="nav-links-div">
          {/* The navbar will show these links after you log in */}
          <Link className="nav-text" to="/home">
            Home
          </Link>
          <a className="nav-text" href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : null}
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
