import React, { Component } from 'react';

import './Search.css';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedValue: '',
      inputText: '',
    };
  }

  handleInputTextChange = e => {
    this.setState({
      inputText: e.target.value,
    });
  };

  handleSearchedValueKeyPress = e => {
    if (e.key === 'Enter') {
      this.setState(
        {
          searchedValue: e.target.value,
          inputText: '',
        },
        () => {
          this.props.onSearchedTermChange(this.state.searchedValue);
          this.props.onSearchedByChange(this.props.searchBy.toLowerCase());
        },
      );
    }
  };

  render() {
    return (
      <div className="search-container">
        <input
          onChange={this.handleInputTextChange}
          value={this.state.inputText}
          onKeyPress={this.handleSearchedValueKeyPress}
          placeholder={`Search by ${this.props.searchBy}`}
        />
      </div>
    );
  }
}

export default Search;
