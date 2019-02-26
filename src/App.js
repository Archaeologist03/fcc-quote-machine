import React from 'react';
import { connect } from 'react-redux';

import * as actions from './store/actions';

import './App.css';

import Search from './components/Search/Search';
import QuoteBox from './components/QuoteBox/QuoteBox';

class App extends React.Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     random: true,
  //     searchedTerm: '',
  //     searchedBy: '',
  //   };

  //   this.handleSearchedTerm = this.handleSearchedTerm.bind(this);
  // }

  // handleSearchedTerm = (searchedTerm, searchedBy) => {
  //   this.setState(
  //     {
  //       searchedTerm,
  //       searchedBy,
  //     },
  //     () =>
  //       console.log(
  //         'FROM SETSTATE app...',
  //         this.state.searchedTerm,
  //         this.state.searchedBy,
  //       ),
  //   );
  // };

  componentDidMount() {
    console.log(this.props.searchedTerm);

    setTimeout(() => {
      console.log(this.props.searchedTerm);
    }, 1111);
  }

  render() {
    return (
      <div className="app-container">
        <div className="searches-container">
          <Search
            handleSearchedTerm={this.props.onSearchedTermChange}
            searchBy="Tag"
            onSearchedByChange={this.props.onSearchedByChange}
            term={this.props.searchedTerm}
          />
          <Search
            handleSearchedTerm={this.props.onSearchedTermChange}
            searchBy="Title"
            onSearchedByChange={this.props.onSearchedByChange}
          />
          <Search
            handleSearchedTerm={this.props.onSearchedTermChange}
            searchBy="Author"
            onSearchedByChange={this.props.onSearchedByChange}
          />
        </div>
        <div className="quoteBox-app-container">
          <QuoteBox
            searchedTerm={this.props.searchedTerm}
            searchedBy={this.props.searchedBy}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const { searchedTerm, searchedBy, quotes } = state.app;
  return {
    searchedTerm,
    searchedBy,
    quotes,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSearchedTermChange: text => dispatch(actions.searchedTermChange(text)),
    onSearchedByChange: text => dispatch(actions.searchedByChange(text)),
    onUpdateQuotesArr: arr => dispatch(actions.updateQuotesArr(arr)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
