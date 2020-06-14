import React from "react";
import { connect } from "react-redux";
import { Slider } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const LegislatorRatings = (props) => {
  // const { activeLegislator, legislatorRatings } = props;

  let legislatorRatings = [
    {
      userId: 1,
      legislatorId: 1,
      transparency: 3,
      publicEngagement: 2,
      alignWithValues: 4,
      description: "They are someone I can get behind.",
      overallRating: 3,
    },
    {
      userId: 2,
      legislatorId: 1,
      transparency: 2,
      publicEngagement: 3,
      alignWithValues: 5,
      description:
        "I don't like that they do not always publicly announce their plans, but they get the job done.",
      overallRating: 3.33,
    },
    {
      userId: 3,
      legislatorId: 1,
      transparency: 1,
      publicEngagement: 1,
      alignWithValues: 1,
      description:
        "I can't stand them, they completely disregard the public need and have done so for years.",
      overallRating: 1,
    },
    {
      userId: 4,
      legislatorId: 1,
      transparency: 3,
      publicEngagement: 5,
      alignWithValues: 4,
      description:
        "They came by the community center and spoke with kids about the dangers of drugs and alcohol abuse. They have good intentions.",
      overallRating: 4,
    },
    {
      userId: 5,
      legislatorId: 1,
      transparency: 2,
      publicEngagement: 2,
      alignWithValues: 3,
      description: "",
      overallRating: 2.33,
    },
  ];
  return (
    <div id="ratings-container">
      <h3>Reviews</h3>
      <button className="primary-btn">ADD REVIEW</button>
      <div id="legislator-ratings">
        {legislatorRatings.map((rating, idx) => {
          return (
            <div className="legislator-rating" key={idx}>
              <div className="user-details">
                <h4>User {rating.userId}</h4>
              </div>
              <div className="user-scoring">
                <Rating
                  defaultValue={rating.overallRating}
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
};

const mapState = (state) => {
  // TODO: get all user ratings associated with legislator by using the legislator's id
  return {
    // activeLegislator: state.activeLegislator,
    legislatorRatings: state.legislatorRatings,
  };
};

const mapDispatchToProps = (dispatch) => ({
  // TODO: dispatch action to get all user ratings associated with legislator by using the legislator's id
});

export default connect(mapState, mapDispatchToProps)(LegislatorRatings);
