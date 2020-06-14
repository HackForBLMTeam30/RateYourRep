import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllLegislators } from '../store/legislator';
import { me } from '../store/user';
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
} from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export class Legislators extends Component {
  async componentDidMount() {
    await this.props.me();
    const { user } = this.props;
    const address = user.address;
    this.props.getAllLegislators(address);
  }
  render() {
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
              {this.props.legislators.map((legislator, key) => {
                return (
                  <TableRow key={key}>
                    <TableCell>
                      <Avatar alt="legislator img" src={legislator.photoUrl} />
                      {legislator.name}
                    </TableCell>
                    <TableCell>{legislator.role}</TableCell>
                    <TableCell>
                      <Rating name="simple-controlled" value={3} readOnly />
                    </TableCell>
                    <TableCell>{legislator.party}</TableCell>
                    <TableCell align="center">
                      <ChevronRightIcon fontSize="large" />
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
