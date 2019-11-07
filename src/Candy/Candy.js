import React from 'react';
import getAllCandy from '../helpers/dataRequests/CandyRequests';

class Candy extends React.Component {
  state = {
    allCandy: [],
  }

  componentDidMount() {
    getAllCandy()
      .then((res) => this.setState({ allCandy: res }))
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <>
        <h1>All Candy</h1>
      </>
    );
  }
}

export default Candy;
