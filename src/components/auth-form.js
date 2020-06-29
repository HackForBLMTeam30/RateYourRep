import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { auth } from '../store';
import styling from '../login.module.css';
import house from '../assets/house.svg';
import trending from '../assets/trending.svg';
import { Link } from 'react-router-dom';
import {
  TextField,
  FormLabel,
  RadioGroup,
  Radio,
  FormControlLabel,
} from '@material-ui/core';
import { styled } from '@material-ui/core/styles';
/**
 * COMPONENT
 */

const AuthForm = (props) => {
  const { name, displayName, handleSubmit, error } = props;
  const handleChange = (e) => {
    console.log('placeholder');
  };

  return (
    <div id={styling.loginFlex}>
      <div className={styling.formDiv}>
        <form onSubmit={handleSubmit} name={name}>
          <h3>{displayName.toUpperCase()}</h3>
          <div className={styling.loginWrapper}>
            <div className={styling.inputDiv}>
              <TextField
                InputProps={{ disableUnderline: true }}
                variant="filled"
                name="email"
                type="text"
                placeholder="email"
                fullWidth
              />
            </div>

            <div className={styling.inputDiv}>
              <TextField
                InputProps={{ disableUnderline: true }}
                variant="filled"
                name="password"
                type="text"
                placeholder="password"
                autoComplete="on"
                fullWidth
              />
            </div>
          </div>
          {name === 'signup' && (
            <div className={styling.loginWrapper}>
              <div className={styling.inputDiv}>
                <TextField
                  fullWidth
                  id="filled-basic"
                  InputProps={{ disableUnderline: true }}
                  placeholder="First Name"
                  variant="filled"
                />
              </div>

              <div className={styling.inputDiv}>
                <TextField
                  fullWidth
                  placeholder="Last Name"
                  variant="filled"
                  type="text"
                  InputProps={{ disableUnderline: true }}
                />
              </div>

              <div className={styling.inputDiv}>
                <TextField
                  fullWidth
                  placeholder="Street Address 1"
                  name="street1"
                  variant="filled"
                  InputProps={{ disableUnderline: true }}
                />
              </div>

              <div className={styling.inputDiv}>
                <TextField
                  fullWidth
                  placeholder="Street Address 2"
                  name="street2"
                  variant="filled"
                  InputProps={{ disableUnderline: true }}
                />
              </div>
              <div className={styling.inputDiv}>
                <TextField
                  fullWidth
                  placeholder="City"
                  name="city"
                  variant="filled"
                  InputProps={{ disableUnderline: true }}
                />
              </div>
              <div className={styling.inputDiv}>
                <TextField
                  fullWidth
                  placeholder="State"
                  InputProps={{ disableUnderline: true }}
                  name="state"
                  variant="filled"
                />
              </div>
              <div className={styling.inputDiv}>
                <TextField
                  fullWidth
                  InputProps={{ disableUnderline: true }}
                  placeholder="Zip Code"
                  name="zip"
                  variant="filled"
                />
              </div>
              <FormLabel
                className={styling.formLabel}
                name="identity"
                component="legend"
              >
                Do you identify as part of any of the following groups?
              </FormLabel>
              <RadioGroup name="identity" value={false} onChange={handleChange}>
                <FormControlLabel
                  value="false"
                  control={<Radio />}
                  label="Black or African American"
                />
                <FormControlLabel
                  className={styling.testClass}
                  value="male"
                  control={<Radio />}
                  label="Hispanic or Latin American"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
                <FormControlLabel
                  value="disabled"
                  disabled
                  control={<Radio />}
                  label="(Disabled option)"
                />
              </RadioGroup>
            </div>
          )}

          <div>
            <button type="submit" className="primary-btn">
              {displayName}
            </button>
          </div>
          {error && error.response && <div> {error.response.data} </div>}
        </form>
      </div>
      <div className={styling.logoDiv}>
        <div className={styling.logoContainer}>
          <img src={trending} alt="trending"></img>
          <h3 className={styling.logoName}>Rate Your Rep</h3>
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

export default { Login, Signup };
/**
 * PROP TYPES
 */
AuthForm.propTypes = {
  name: PropTypes.string.isRequired,
  displayName: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.object,
};
