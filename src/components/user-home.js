import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const { email } = props;

  return (
    <div>
      <div className="links-div">
        <div className="nav-box">
          <h4>Your Ratings</h4>
          <p className="nav-text">Welcome, {email}</p>
          <button className="primary-btn">
            <Link className="link-fix" to="/ratings">
              View Your Ratings
            </Link>
          </button>
        </div>

        <div className="nav-box">
          <h4>Legislators</h4>
          <p className="nav-text">
            Track your legislators and see their ratings
          </p>
          <button className="primary-btn">
            <Link className="link-fix" to="/legislators">
              View Your Legislators
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = (state) => {
  return {
    email: state.user.email,
  };
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string,
};
