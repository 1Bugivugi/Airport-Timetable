import React, { Component } from 'react';

class SearchBar extends Component {

  state = {
    query: ''
  }

  updateQuery = (query) => {
    this.setState({ query });
    this.props.getState(query);
  }

  render() {
    return (
      <div id='search'>
        <input
          className="search-input"
          type="text"
          placeholder="Search by board number..."
          value={this.state.query}
          onChange={(event) => this.updateQuery(event.target.value)}
        />
      </div>
    )
  }
}

export default SearchBar;
