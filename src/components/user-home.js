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
      <h3>Welcome, {email}</h3>
      <div className="links-div">
        <div className="nav-box">
          <h4>Your Ratings</h4>
          <button>
            <Link className="link-fix" to="/ratings">
              Get All Legislators
            </Link>
          </button>
        </div>

        <div className="nav-box">
          <h4>Legislators</h4>
          <button>
            <Link className="link-fix" to="/legislators">
              Get All Legislators
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
