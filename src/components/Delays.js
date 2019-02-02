import React, { Component } from 'react';

class Delays extends Component {

  getList = () => {
    if (!this.props.values) {
      return [];
    } else {
      return this.props.values
      .filter(value => value.status === 'delayed')
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
      <table style={this.getActive('delayedTable')}>
        <thead>
          <tr>
            <th>Delayed to</th>
            <th>Will departure at</th>
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

export default Delays;
