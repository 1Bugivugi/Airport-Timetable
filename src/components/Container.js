import React, { Component } from 'react';
import Buttons from './Buttons.js';
import SearchBar from './SearchBar.js';
import Departures from './Departures.js';
import Arrivals from './Arrivals.js';
import Delays from './Delays.js';
import axios from 'axios';

class Container extends Component {

  state = {
    list: []
  }

  componentDidMount(){
    this.getData()
  }

  getData = () => {
    axios.get('flightListDB.json')
      .then(response => {
        // console.log(response)
        this.setState(() => {
          return{ list: response}
        })
      })
  }



  render() {
    return (
      <div>
        <div>
          <Buttons />
          <SearchBar />
        </div>
        <div>
          <Departures
            values={this.state.list.data}
          />
        </div>
        <div>
          <Arrivals
            values={this.state.list.data}
          />
        </div>
        <div>
          <Delays
            values={this.state.list.data}
          />
        </div>
      </div>
    )
  }
}

export default Container;
