import React, { Component } from "react";
import { connect } from "react-redux";
import { getAllLegislators } from "../store/legislator";
import { me } from "../store/user";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Avatar,
  Container,
} from "@material-ui/core";
import Rating from "@material-ui/lab/Rating";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import history from "../history";
import { NavLink } from "react-router-dom";

export class Legislators extends Component {
  async componentDidMount() {
    await this.props.me();
    const { user } = this.props;
    const address = user.address;
    await this.props.getAllLegislators(address);
  }
  render() {
    const { legislators } = this.props;
    return (
      <Container>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Legislator</TableCell>
                <TableCell>Role</TableCell>
                <TableCell>Rating</TableCell>
                <TableCell>Party</TableCell>
                <TableCell>Details</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {legislators.map((legislator, key) => {
                let overallRating, overallBlkRating;
                if (legislator.AverageRating) {
                  overallRating = legislator.overallRating;
                }
                if (legislator.AverageBLKRating) {
                  overallBlkRating = legislator.overallBlkRating;
                }
                return (
                  <TableRow key={key}>
                    <TableCell>
                      <Avatar alt="legislator img" src={legislator.photoUrl} />
                      {legislator.name}
                    </TableCell>
                    <TableCell>{legislator.role}</TableCell>
                    <TableCell>
                      <Rating
                        name="simple-controlled"
                        value={overallRating}
                        readOnly
                      />
                    </TableCell>
                    <TableCell>{legislator.party}</TableCell>
                    <TableCell align="center">
                      <NavLink to={{pathname: `/legislator-landing/${legislator.id}`, state: {overallRating, overallBlkRating}}}>
                        <ChevronRightIcon fontSize="large" />
                      </NavLink>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    );
  }
}

const mapStateToProps = (state) => ({
  legislators: state.legislators,
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  getAllLegislators: (address) => dispatch(getAllLegislators(address)),
  me: (address) => dispatch(me()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Legislators);
