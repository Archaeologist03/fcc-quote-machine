import React from "react";

import "./App.css";

import Search from "./components/Search/Search";
import QuoteBox from "./components/QuoteBox/QuoteBox";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      random: true,
      quote: "",
      searchedTerm: "",
      searchedBy: "",
    };

    this.handleSearchedTerm = this.handleSearchedTerm.bind(this);
  }

  handleSearchedTerm = (searchedTerm, searchedBy) => {
    this.setState(
      {
        searchedTerm,
        searchedBy,
      },
      () => console.log("FROM SETSTATE app...", this.state.searchedTerm, this.state.searchedBy),
    );
  };

  render() {
    return (
      <div className="app-container">
        <div className="searches-container">
          <Search handleSearchedTerm={this.handleSearchedTerm} searchBy="tag" />
          <Search
            handleSearchedTerm={this.handleSearchedTerm}
            searchBy="title"
          />
          <Search
            handleSearchedTerm={this.handleSearchedTerm}
            searchBy="author"
          />
        </div>
        <div className="quoteBox-app-container">
          <QuoteBox
            searchedTerm={this.state.searchedTerm}
            searchedBy={this.state.searchedBy}
          />
        </div>
      </div>
    );
  }
}

export default App;

// handleTitleSearch = () => {

// }

// handleAuthorSearch = () => {

// }

// handleTagSearch = () => {

// }
