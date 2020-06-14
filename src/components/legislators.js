import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getAllLegislators } from '../store/legislator';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Avatar from '@material-ui/core/Avatar';
import Container from '@material-ui/core/Container';
import Rating from '@material-ui/lab/Rating';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

export class Legislators extends Component {
  componentDidMount() {
    let address = '31-46 14th. st. apt. 4 astoria ny 11106';
    this.props.getAllLegislators(address);
  }
  render() {
    console.log(this.props);
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
});

const mapDispatchToProps = (dispatch) => ({
  getAllLegislators: (address) => dispatch(getAllLegislators(address)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Legislators);
