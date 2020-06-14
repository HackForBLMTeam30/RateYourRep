import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getAllRatings } from '../store/ratings';
import { connect } from 'react-redux';
import { me } from '../store/user';
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

  async componentDidMount() {
    await this.props.me();
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleChange = (name) => (e, value) => {
    this.setState({
      [name]: value,
    });
  };

  onSubmit(e) {
    e.preventDefault();
    const { id } = this.props.match.params;
    const { user } = this.props;
    const userId = user.id;
    const newRating = {
      transparency: this.state.transparency,
      publicEngagement: this.state.publicEngagement,
      alignWithValues: this.state.alignWithValues,
      description: this.state.description,
      user: { id: userId },
      legislatorId: id,
    };
    this.props.getAllRatings(newRating, this.props.history);
    this.props.history.push('/home');
  }

  render() {
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

const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  getAllRatings: (obj) => dispatch(getAllRatings(obj)),
  me: () => dispatch(me()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(AddRating));
