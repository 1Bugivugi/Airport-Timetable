import React, { Component } from 'react';

class Buttons extends Component {
  render() {
    return (
      <div id='buttons'>
        <a onClick={() => {this.props.isActive('departuredTable')}}>Departures</a>
        <a onClick={() => {this.props.isActive('arrivedTable')}}>Arrivals</a>
        <a onClick={() => {this.props.isActive('delayedTable')}}>Delays</a>
      </div>
    )
  }
}

export default Buttons;
