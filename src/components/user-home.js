import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styles from '../login.module.css';

/**
 * COMPONENT
 */
export const UserHome = (props) => {
  const { email } = props;

  return (
    <div>
      <div className={styles.linksDiv}>
        <div className={styles.navBox}>
          <h4>Your Ratings</h4>
          <p className={styles.navText}>Welcome, {email}</p>
          <Link to="/ratings">
            <button className="primary-btn">View Your Ratings</button>
          </Link>
        </div>

        <div className={styles.navBox}>
          <h4>Legislators</h4>
          <p className={styles.navText}>
            Track your legislators and see their ratings
          </p>
          <Link to="/legislators">
            <button className="primary-btn">View Your Legislators</button>
          </Link>
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
