import React from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { withStyles } from "@material-ui/core/styles";
import { Avatar, Button, Tooltip } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import {LegislatorProfile, LegislatorRatings} from './index'
import {getActiveLegislator} from '../store/active-legislator'

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
  }
});

const StyledRating = withStyles({
  iconFilled: {
    color: 'black',
  },
  iconHover: {
    color: '#ff3d47',
  },
})(Rating);

class LegislatorLanding extends React.Component {
  constructor() {
    super();
    this.state = { displayProfile: false };
    this.handleProfile = this.handleProfile.bind(this);
  }
  componentDidMount() {
    // TODO: testing with store, will need dispatch of id to occur on button click to legislator-landing, not on the legislator-landing component. Also, still waiting on overall rating score and breakdown scores from backend calculations.
    this.props.getActiveLegislator(1);
  }

  handleProfile() {
    this.setState({ displayProfile: !this.state.displayProfile });
  }

  render() {
    const { activeLegislator, classes } = this.props;
    const {displayProfile} = this.state;
    // dummy data
    // let activeLegislator = {
    //   name: "Mike Pence",
    //   role: "Vice President of the United States",
    //   address: "1600 Pennsylvania Avenue Northwest Washington DC 20500",
    //   party: "Republican Party",
    //   phones: ["(202) 456-1111"],
    //   urls: ["https://www.whitehouse.gov/"],
    //   photoUrl:
    //     "https://www.whitehouse.gov/sites/whitehouse.gov/files/images/45/VPE%20Color.jpg",
    //   channels: [
    //     {
    //       type: "Facebook",
    //       id: "mikepence",
    //     },
    //     {
    //       type: "Twitter",
    //       id: "VP",
    //     },
    //   ],
    //   overallRating: 2.3,
    //   overallBlkRating: 1.8
    // };
    return (
      <div>
      <div id="summary">
        <div id="basic-info">
          <div id="legislator-photo">
            <Avatar
              alt={activeLegislator.name}
              src={activeLegislator.photoUrl}
              className={classes.large}
            />
          </div>
          <div id="basic-details">
            <h3>{activeLegislator.name}</h3>
            <h4>Role: {activeLegislator.role}</h4>
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
          {/* TODO: Pending overall rating score and breakdown scores from backend calculations. */}
          <Tooltip title="All" aria-label="identity" arrow><div><Rating
            defaultValue={activeLegislator.overallRating}
            precision={0.1}
            readOnly
          /></div></Tooltip>
          <Tooltip title="Black or African American" aria-label="identity" arrow><div><StyledRating
            defaultValue={activeLegislator.overallBlkRating}
            precision={0.1}
            readOnly
          /></div></Tooltip>
        </div>
      </div>
      {displayProfile ? <LegislatorProfile activeLegislator={activeLegislator} /> : <LegislatorRatings activeLegislator={activeLegislator} />}
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    activeLegislator: state.activeLegislator,
  };
};

const mapDispatchToProps = dispatch => ({
  getActiveLegislator: (id) => dispatch(getActiveLegislator(id))
})

export default compose(
  connect(mapState, mapDispatchToProps),
  withStyles(styles)
)(LegislatorLanding);
