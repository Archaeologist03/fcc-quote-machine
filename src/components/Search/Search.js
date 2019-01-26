import React, { Component } from "react";

import './Search.css';

export class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchedValue: "",
      inputText: "",
    };
  }

  handleInputTextChange = e => {
    this.setState({
      inputText: e.target.value,
    });
  };

  handlesearchedValueKeyPress = e => {
    if (e.key === "Enter") {
      this.setState(
        {
          searchedValue: e.target.value,
        },
        () =>
          this.props.handleSearchedTerm(
            this.state.searchedValue,
            this.props.searchBy,
          ),
      );
    }
  };

  render() {
    return (
      <div className="search-container">
        <input
          onChange={this.handleInputTextChange}
          value={this.state.inputText}
          onKeyPress={this.handlesearchedValueKeyPress}
          placeholder={`Search by ${this.props.searchBy}`}
        />
      </div>
    );
  }
}

export default Search;
