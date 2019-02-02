import React, { Component } from 'react';

class Arrivals extends Component {

  getList = () => {
    if (!this.props.values) {
      return [];
    } else {
      return this.props.values
      .filter(value => value.status === 'arrived')
    }
  }

  getActive(answer) {
    if (this.props.isActive === answer) {
      return ({display: ''});
    } else {
      return ({display: 'none'})
    }
  }

  render() {
    return (
      <table style={this.getActive('arrivedTable')}>
        <thead>
          <tr>
            <th>Arrives from</th>
            <th>At</th>
            <th>Board Number</th>
          </tr>
        </thead>
        <tbody>
        {
          this.getList().map((value) => {
            if (value.boardNumber.toLowerCase().includes(this.props.searchQuery.toLowerCase())){
              return <tr key={value.id}><td>{value.to}</td><td>{value.startTime}</td><td>{value.boardNumber}</td></tr>
            } else if(this.props.searchQuery === ''){
              return <tr key={value.id}><td>{value.to}</td><td>{value.startTime}</td><td>{value.boardNumber}</td></tr>
            }
          })
        }
        </tbody>
      </table>
    )
  }
}

export default Arrivals;
