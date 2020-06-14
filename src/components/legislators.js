import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllLegislators, getRating } from '../store';

export class Legislators extends Component {
  componentDidMount() {
    let address = '31-46 14th st. apt. 4 astoria, NY 11106';
    this.props.getAllLegislators(address);
  }
  render() {
    console.log(this.props);
    return (
      <>
        {this.props.legislators.map((legislator) => {
          return (
            <>
              <h1>{legislator.name}</h1>
              <h1>{legislator.address}</h1>
            </>
          );
        })}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  legislators: state.legislators,
});

const mapDispatchToProps = (dispatch) => ({
  getAllLegislators: (address) => dispatch(getAllLegislators(address)),
  getRating: (legislatorId, ratingType) =>
    dispatch(getRating(legislatorId, ratingType)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Legislators);
