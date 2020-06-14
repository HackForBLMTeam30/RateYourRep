import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Avatar, Button } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import {LegislatorProfile} from './index'

const styles = (theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(16),
    height: theme.spacing(16),
  },
});

class LegislatorLanding extends React.Component {
  constructor() {
    super();
    this.state = { displayProfile: false };
    this.handleProfile = this.handleProfile.bind(this);
  }
  componentDidMount() {
    // props from connecting to Redux store
    // const {legislator} = this.props
  }

  handleProfile() {
    this.setState({ displayProfile: !this.state.displayProfile });
  }

  render() {
    const { classes } = this.props;
    const {displayProfile} = this.state;
    // dummy data
    let legislator = {
      name: "Mike Pence",
      role: "Vice President of the United States",
      address: "1600 Pennsylvania Avenue Northwest Washington DC 20500",
      party: "Republican Party",
      phones: ["(202) 456-1111"],
      urls: ["https://www.whitehouse.gov/"],
      photoUrl:
        "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/VPE%20Color.jpg",
      channels: [
        {
          type: "Facebook",
          id: "mikepence",
        },
        {
          type: "Twitter",
          id: "VP",
        },
      ],
      overallRating: 2.3,
    };
    return (
      <div>
      <div id="summary">
        <div id="basic-info">
          <div id="legislator-photo">
            <Avatar
              alt={legislator.name}
              src={legislator.photoUrl}
              className={classes.large}
            />
          </div>
          <div id="basic-details">
            <h3>{legislator.name}</h3>
            <h4>Role: {legislator.role}</h4>
            <Button
              variant="outlined"
              color="primary"
              onClick={() => this.handleProfile()}
            >
              {displayProfile ? 'VIEW RATINGS' : 'VIEW PROFILE'}
            </Button>
          </div>
        </div>
        <div id="score">
          <h3>Overall Rating:</h3>
          <Rating
            defaultValue={legislator.overallRating}
            precision={0.1}
            readOnly
          />
          <h5>{legislator.overallRating}</h5>
        </div>
      </div>
      {displayProfile ? <LegislatorProfile legislator={legislator} /> : null}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    legislator: state.user.legislator,
  };
};

export default compose(
  connect(mapState, null),
  withStyles(styles)
)(LegislatorLanding);
