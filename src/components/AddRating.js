import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Slider,
  Box,
  FormControl,
  TextField,
} from '@material-ui/core';

class AddRating extends Component {
  constructor() {
    super();
    this.state = {
      transparency: 0,
      publicEngagement: 0,
      alignWithValues: 0,
      description: '',
      userId: '',
      legislatorId: '',
    };
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  // componentDidMount() {
  //   if (this.props.auth.isAuthenticated) {
  //     this.props.history.push('/events');
  //   }
  // }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleChange = (name) => (e, value) => {
    this.setState({
      [name]: value, // --> Important bit here: This is how you set the value of sliders
    });
  };

  onSubmit(e) {
    e.preventDefault();
    // const newUser = {
    //   transparency: 1,
    //   publicEngagement: 1,
    //   alignWithValues: 1,
    //   description: 'ARE YOU SAVING?  description',
    //   userId: 1,
    //   legislatorId: 1,
    // };
    const newRating = {
      transparency: this.state.transparency,
      publicEngagement: this.state.publicEngagement,
      alignWithValues: this.state.alignWithValues,
      description: this.state.description,
      userId: this.state.userId,
      legislatorId: this.state.legislatorId,
    };
    console.log('OUTPUT: AddRating -> onSubmit -> newRating', newRating);

    // this.props.registerUser(newUser, this.props.history);
  }

  render() {
    console.log('OUTPUT: AddRating -> render -> render', this.state);
    const { transparency, publicEngagement, alignWithValues } = this.state;
    return (
      <Grid container justify="center">
        <Grid item xs={12} sm={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h5" paragraph className="mb-2">
                Write a review
              </Typography>

              <form onSubmit={this.onSubmit} className="mb-2">
                <Grid container spacing={4}>
                  <Grid item xs={12} md={6}>
                    <Box display="flex" className="mb-2">
                      <Box width="50%">
                        <Typography gutterBottom align="left">
                          Transparency
                        </Typography>
                      </Box>
                      <Box width="50%">
                        <Slider
                          className="blue"
                          value={transparency}
                          aria-labelledby="label"
                          onChange={this.handleChange('transparency')}
                          valueLabelDisplay="on"
                          min={0}
                          step={1}
                          max={5}
                        />
                      </Box>
                    </Box>

                    <Box display="flex" className="mb-2">
                      <Box width="50%">
                        <Typography gutterBottom align="left">
                          Public Engagement
                        </Typography>
                      </Box>
                      <Box width="50%">
                        <Slider
                          className="blue"
                          value={publicEngagement}
                          aria-labelledby="label"
                          onChange={this.handleChange('publicEngagement')}
                          valueLabelDisplay="on"
                          min={0}
                          step={1}
                          max={5}
                        />
                      </Box>
                    </Box>

                    <Box display="flex" className="mb-2">
                      <Box width="50%">
                        <Typography gutterBottom align="left">
                          Align with values
                        </Typography>
                      </Box>
                      <Box width="50%">
                        <Slider
                          className="blue"
                          value={alignWithValues}
                          aria-labelledby="label"
                          onChange={this.handleChange('alignWithValues')}
                          valueLabelDisplay="on"
                          min={0}
                          step={1}
                          max={5}
                        />
                      </Box>
                    </Box>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <Box>
                      <FormControl fullWidth={true} margin="normal">
                        <TextField
                          label="Comments"
                          name="description"
                          value={this.state.description}
                          onChange={this.onChange}
                          variant="filled"
                          rows={8}
                          multiline
                        />
                      </FormControl>
                    </Box>
                    <Button
                      className="btn-rating primary-color white"
                      type="submit"
                      variant="contained"
                    >
                      Submit
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    );
  }
}

// const mapStateToProps = (state) => ({
//   auth: state.auth,
//   errors: state.errors,
// });

// export default connect(mapStateToProps, { registerUser })(
//   withRouter(AddRating)
// );

export default AddRating;
