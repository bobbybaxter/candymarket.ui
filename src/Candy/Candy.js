import React from 'react';
import $ from 'jquery';
import 'datatables.net';
import getAllCandy from '../helpers/dataRequests/CandyRequests';

import './Candy.scss';

class Candy extends React.Component {
  state = {
    allCandy: [],
  }

  componentDidMount() {
    getAllCandy()
      .then((res) => this.setState({ allCandy: res }));
  }

  printCandyTable = () => {
    $(this.refs.candyDiv).DataTable({
      data: this.state.allCandy,
      columns: [
        { data: 'id' },
        { data: 'name' },
        { data: 'category' },
        { data: 'manufacturer' },
      ],
    });
  };

  render() {
    if (this.refs.candyDiv) {
      this.printCandyTable();
    }

    return (
      <div className="container">
        <h1 className="mb-5">Candy Market</h1>
        <table id="candyDiv" ref="candyDiv" className="display compact">
          <thead>
            <tr>
              <th>Category</th>
              <th>Id</th>
              <th>Manufacturer</th>
              <th>Name</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default Candy;
