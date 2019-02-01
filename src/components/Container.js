import React, { Component } from 'react';
import Buttons from './Buttons.js';
import SearchBar from './SearchBar.js';
import Departures from './Departures.js';
import Arrivals from './Arrivals.js';
import Delays from './Delays.js';
import axios from 'axios';

class Container extends Component {

  state = {
    list: [],
    active: 'departuredTable',
    query: ''
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

  killMe = (answer) => {
    this.setState({ active: answer})
  }

  setActive = (answer) => {
    switch(answer) {
      case 'departuredTable':
        this.killMe(answer)
      break;
      case 'arrivedTable':
        this.killMe(answer)
      break;
      case 'delayedTable':
        this.killMe(answer)
      break;
    }
  }

  getState = (query) => {
    this.setState({query})
  }

  render() {
    return (
      <div>
        <div>
          <Buttons
            isActive={this.setActive}
          />
          <SearchBar
            getState={this.getState}
          />
        </div>
        <div id='departuredTable'>
          <Departures
            values={this.state.list.data}
            isActive={this.state.active}
            searchQuery={this.state.query}
          />
        </div>
        <div id='arrivedTable'>
          <Arrivals
            values={this.state.list.data}
            isActive={this.state.active}
            searchQuery={this.state.query}
          />
        </div>
        <div id='delayedTable'>
          <Delays
            values={this.state.list.data}
            isActive={this.state.active}
            searchQuery={this.state.query}
          />
        </div>
      </div>
    )
  }
}

export default Container;
