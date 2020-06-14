import React from 'react';
import { connect } from 'react-redux';
import { Slider } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { getAllLegislatorRatings } from '../store/legislator-ratings';
import { getActiveLegislator } from '../store/active-legislator';
import { Link } from 'react-router-dom';

class LegislatorRatings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      legislatorRatings: null,
      hasLegislator: false,
    };
    this.props = props;
  }

  async componentDidUpdate() {
    const { activeLegislator } = this.props;
    if (activeLegislator.id && !this.state.hasLegislator) {
      await this.props.getAllLegislatorRatings(activeLegislator.id);
      this.setState({ hasLegislator: true });
    }
  }

  render() {
    const { legislatorRatings, activeLegislator } = this.props;
    return (
      <div id="ratings-container">
        <h3>Reviews</h3>
        <button className="primary-btn">
          <Link to={`/add-rating/${activeLegislator.id}`}>ADD REVIEW</Link>
        </button>
        <div id="legislator-ratings">
          {legislatorRatings &&
            legislatorRatings.map((rating, idx) => {
              let overallRating =
                (rating.transparency +
                  rating.publicEngagement +
                  rating.alignWithValues) /
                3;
              return (
                <div className="legislator-rating" key={idx}>
                  <div className="user-details">
                    <h4>User {rating.id}</h4>
                  </div>
                  <div className="user-scoring">
                    <Rating
                      defaultValue={overallRating}
                      precision={0.1}
                      readOnly
                    />
                    <p>{rating.description}</p>
                  </div>
                  <div className="user-breakdown">
                    <h4>Transparency</h4>
                    <Slider
                      value={rating.transparency}
                      min={0}
                      step={0.1}
                      max={5}
                      scale={(x) => x ** 10}
                      valueLabelDisplay="auto"
                      aria-labelledby="non-linear-slider"
                      disabled
                    />
                    <h4>Public Engagement</h4>
                    <Slider
                      value={rating.publicEngagement}
                      min={0}
                      step={0.1}
                      max={5}
                      scale={(x) => x ** 10}
                      valueLabelDisplay="auto"
                      aria-labelledby="non-linear-slider"
                      disabled
                    />
                    <h4>Align with Values</h4>
                    <Slider
                      value={rating.alignWithValues}
                      min={0}
                      step={0.1}
                      max={5}
                      scale={(x) => x ** 10}
                      valueLabelDisplay="auto"
                      aria-labelledby="non-linear-slider"
                      disabled
                    />
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    );
  }
}

const mapState = (state) => {
  return {
    activeLegislator: state.activeLegislator,
    legislatorRatings: state.legislatorRatings,
  };
};

const mapDispatchToProps = (dispatch) => ({
  getActiveLegislator: (id) => dispatch(getActiveLegislator(id)),
  getAllLegislatorRatings: (id) => dispatch(getAllLegislatorRatings(id)),
});

export default connect(mapState, mapDispatchToProps)(LegislatorRatings);
