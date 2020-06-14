import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth } from '../store';

/**
 * COMPONENT
 */
const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;

  return (
    <div>
      <form
          className="authentication-form"
          onSubmit={handleSubmit}
          name={name}
        >
          <h3>{name.toUpperCase()}</h3>
          {name === 'signup' && (
            <React.Fragment>
              <div>
                <label htmlFor="first_name">
                  <small>First Name</small>
                </label>
                <input name="first_name" type="text" />
              </div>
              <div>
                <label htmlFor="last_name">
                  <small>Last Name</small>
                </label>
                <input name="last_name" type="text" />
              </div>
              <div>
                <label htmlFor="street1">
                  <small>Street Address 1</small>
                </label>
                <input name="street1" type="text" />
              </div>
              <div>
                <label htmlFor="street2">
                  <small>Street Address 2</small>
                </label>
                <input name="street2" type="text" />
              </div>
              <div>
                <label htmlFor="city">
                  <small>City</small>
                </label>
                <input name="city" type="text" />
              </div>
              <div>
                <label htmlFor="state">
                  <small>State</small>
                </label>
                <input name="state" type="text" />
              </div>
              <div>
                <label htmlFor="zip">
                  <small>Zip Code</small>
                </label>
                <input name="zip" type="text" />
              </div>
              <div>
                <label htmlFor="identity">
                  <small>Do you identify as Black or African American?</small>
                </label>
                <input name="identity" type="checkbox" />
              </div>
            </React.Fragment>
          )}
          <div>
            <label htmlFor="email">
              <small>Email</small>
            </label>
            <input name="email" type="text" />
          </div>
          <div>
            <label htmlFor="password">
              <small>Password</small>
            </label>
            <input name="password" type="password" autoComplete="on" />
          </div>
          <div>
            <button type="submit">{displayName}</button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
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
    displayName: 'Login',
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
