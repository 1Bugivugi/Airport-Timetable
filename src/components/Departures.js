import React, { Component } from 'react';

class Departures extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Departures to</th>
            <th>At</th>
            <th>Board Number</th>
          </tr>
        </thead>
        <tbody>
          <tr>
          {
            this.props.values
            .filter(value => value.status === 'departed')
            .map(value => (
              <td key={value.id}>{value.to}</td>
            ))
          }
          </tr>
        </tbody>
      </table>
    )
  }
}

export default Departures;
