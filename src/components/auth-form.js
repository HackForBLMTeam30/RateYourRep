import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth } from '../store';
import '../login.css';
import house from '../assets/house.svg';
import trending from '../assets/trending.svg';
import { Link } from 'react-router-dom';

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div id="login-flex">
      <div className="form-div">
        <form onSubmit={handleSubmit} name={name}>
          <h3>{displayName.toUpperCase()}</h3>
          {name === 'signup' && (
            <>
              {/* <label htmlFor="first_name">
                <small>First Name</small>
              </label> */}
              <input placeholder="First Name" name="first_name" type="text" />

              {/* <label htmlFor="last_name">
                <small>Last Name</small>
              </label> */}
              <input placeholder=" Last Name" name="last_name" type="text" />

              {/* <label htmlFor="street1">
                <small>Street Address 1</small>
              </label> */}
              <input
                placeholder="Street Address 1"
                name="street1"
                type="text"
              />

              {/* <label htmlFor="street2">
                <small>Street Address 2</small>
              </label> */}

              <input
                placeholder="Street Address 2"
                name="street2"
                type="text"
              />

              {/* <label htmlFor="city">
                <small>City</small>
              </label> */}
              <input placeholder="City" name="city" type="text" />

              {/* <label className="label" htmlFor="state">
                <small>State</small>
              </label> */}
              <input
                placeholder="State"
                className="input"
                name="state"
                type="text"
              />

              {/* <label htmlFor="zip">
                <small>Zip Code</small>
              </label> */}
              <input placeholder="Zip Code" name="zip" type="text" />
              <div className="move-checkbox">
                <label htmlFor="identity">
                  <small>Do you identify as Black or African American?</small>
                </label>
                <input name="identity" type="checkbox" />
              </div>
            </>
          )}
          <div className="input-div">
            <input name="email" type="text" placeholder="email" />
          </div>

          <div className="input-div">
            <input
              name="password"
              type="password"
              placeholder="password"
              autoComplete="on"
            />
          </div>

          <div>
            <button type="submit">{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
      <div className="logo-div">
        <div className="logo-container">
          <img src={trending} alt="trending"></img>
          <h3 className="logo-name">Rate Your Rep</h3>
          <img src={house} alt="house"></img>
        </div>
      </div>
    </div>
  );
};

/**
 * CONTAINER
 *   Note that we have two different sets of 'mapStateToProps' functions -
 *   one for Login, and one for Signup. However, they share the same 'mapDispatchToProps'
 *   function, and share the same Component. This is a good example of how we
 *   can stay DRY with interfaces that are very similar to each other!
 */
const mapLogin = (state) => {
  return {
    name: 'login',
    displayName: 'Log In',
    error: state.user.error,
  };
};

const mapSignup = (state) => {
  return {
    name: 'signup',
    displayName: 'Sign Up',
    error: state.user.error,
  };
};

const mapDispatch = (dispatch) => {
  return {
    handleSubmit(evt) {
      evt.preventDefault();
      const formName = evt.target.name;
      const email = evt.target.email.value;
      const password = evt.target.password.value;
      let first_name, last_name, street1, street2, city, state, zip, identity;
      if (formName === 'signup') {
        first_name = evt.target.first_name.value;
        last_name = evt.target.last_name.value;
        street1 = evt.target.street1.value;
        street2 = evt.target.street2.value;
        city = evt.target.city.value;
        state = evt.target.state.value;
        zip = evt.target.zip.value;
        identity = evt.target.identity.checked;
      }
      dispatch(
        auth(
          email,
          password,
          formName,
          first_name,
          last_name,
          street1,
          street2,
          city,
          state,
          zip,
          identity
        )
      );
    },
  };
};

export const Login = connect(mapLogin, mapDispatch)(AuthForm);
export const Signup = connect(mapSignup, mapDispatch)(AuthForm);

/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
};
