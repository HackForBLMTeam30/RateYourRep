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

  return (
    <div id={styling.loginFlex}>
      <div className={styling.formDiv}>
        <form onSubmit={handleSubmit} name={name}>
          <h3 className={styling.displayNameMargin}>
            {displayName.toUpperCase()}
          </h3>
          <div className={styling.loginWrapper}>
            <div className={styling.inputDiv}>
              <TextField
                InputProps={{
                  disableUnderline: true,
                  style: { fontFamily: 'Poppins' },
                }}
                variant="filled"
                name="email"
                type="text"
                placeholder="email"
                fullWidth
              />
            </div>

            <div className={styling.inputDiv}>
              <TextField
                InputProps={{
                  disableUnderline: true,
                  style: { fontFamily: 'Poppins' },
                }}
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
                  InputProps={{
                    disableUnderline: true,
                    style: { fontFamily: 'Poppins' },
                  }}
                  placeholder="First Name"
                  variant="filled"
                  name="first_name"
                />
              </div>

              <div className={styling.inputDiv}>
                <TextField
                  fullWidth
                  placeholder="Last Name"
                  variant="filled"
                  type="text"
                  InputProps={{
                    disableUnderline: true,
                    style: { fontFamily: 'Poppins' },
                  }}
                  name="last_name"
                />
              </div>

              <div className={styling.inputDiv}>
                <TextField
                  fullWidth
                  placeholder="Street Address 1"
                  name="street1"
                  variant="filled"
                  InputProps={{
                    disableUnderline: true,
                    style: { fontFamily: 'Poppins' },
                  }}
                />
              </div>

              <div className={styling.inputDiv}>
                <TextField
                  fullWidth
                  placeholder="Street Address 2"
                  name="street2"
                  variant="filled"
                  InputProps={{
                    disableUnderline: true,
                    style: { fontFamily: 'Poppins' },
                  }}
                />
              </div>
              <div className={styling.inputDiv}>
                <TextField
                  fullWidth
                  placeholder="City"
                  name="city"
                  variant="filled"
                  InputProps={{
                    disableUnderline: true,
                    style: { fontFamily: 'Poppins' },
                  }}
                />
              </div>
              <div className={styling.inputDiv}>
                <TextField
                  fullWidth
                  placeholder="State"
                  InputProps={{
                    disableUnderline: true,
                    style: { fontFamily: 'Poppins' },
                  }}
                  name="state"
                  variant="filled"
                />
              </div>
              <div className={styling.inputDiv}>
                <TextField
                  fullWidth
                  InputProps={{
                    disableUnderline: true,
                    style: { fontFamily: 'Poppins' },
                  }}
                  placeholder="Zip Code"
                  name="zip"
                  variant="filled"
                />
              </div>
              <div className={styling.radioDiv}>
                <FormLabel
                  className={styling.formLabel}
                  name="identity"
                  component="legend"
                >
                  Do you identify as Black or African American?
                </FormLabel>
                <RadioGroup name="identity">
                  <FormControlLabel
                    className={styling.radioButtons}
                    value="true"
                    control={<Radio />}
                    label="Yes"
                  />
                  <FormControlLabel
                    className={styling.radioButtons}
                    value="false"
                    control={<Radio />}
                    label="No"
                  />
                </RadioGroup>
              </div>
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
        identity = evt.target.identity.value;
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
