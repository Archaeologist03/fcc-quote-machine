import React from 'react';

import './QuoteBox.css';

import getAsyncData from '../../assets/utils/getAsyncData';
import BtnNext from '../Buttons/BtnNext/BtnNext';
import BtnPrev from '../Buttons/BtnPrev/BtnPrev';

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      errorOccured: false,
      loaded: false,
    };
  }

  // Initial state of the quote box. (to not display blank/empty quote box to user).
  componentDidMount() {
    getAsyncData('nietzsche', 'tag')
      .then(res => {
        this.props.onUpdateQuotesArr(res.data.quotes);
        this.setState({
          errorOccured: false,
          loaded: true,
        });
      })
      .catch(err =>
        this.setState({
          errorOccured: true,
        }),
      );
  }

  // Checks if searched term changed, and triggers update(redux store/ api call). Otherwise set error to true to display err.
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchedTerm !== this.props.searchedTerm) {
      getAsyncData(this.props.searchedTerm, this.props.searchedBy)
        .then(res => {
          this.props.onUpdateQuotesArr(res.data.quotes);
          this.setState({
            errorOccured: false,
          });
        })
        .catch(err =>
          this.setState({
            errorOccured: true,
          }),
        );
    }
  }

  // If user comes to last quote in the array, he gets back to first one. e.g. 20. -> 1. Otherwise normally goes to next.
  handleBtnNextClick = () => {
    let prevCount = this.state.count;
    if (this.state.count === this.props.quotes.length - 1) {
      this.setState({
        count: 0,
      });
    } else {
      this.setState({
        count: (prevCount += 1),
      });
    }
  };

  // Similar functionality as handleBtnNextClick. Just other way around.
  // If clicked backwards on first quote, goes to last quote in array.
  handleBtnPrevClick = () => {
    let prevCount = this.state.count;
    if (this.state.count === 0) {
      this.setState({
        count: this.props.quotes.length - 1,
      });
    } else {
      this.setState({
        count: (prevCount -= 1),
      });
    }
  };

  // Checks if we have data at all. Displays current quote data if we do. Otherwise displays error mssg in quote place.
  checkAndAssignData = (quote = '', author = '', publication = '') => {
    if (this.props.quotes[0] && !this.state.errorOccured) {
      let ind = this.state.count;
      let currentQuoteData = this.props.quotes[ind];

      quote = currentQuoteData.quote;
      author = `- ${currentQuoteData.author}`;
      publication = currentQuoteData.publication;
    } else if (this.state.loaded) {
      quote = "Ops, couldn't find anything like that. Try something else.";
      author = '';
      publication = '';
    }
    return {
      quote,
      author,
      publication,
    };
  };

  render() {
    const { quote, author, publication } = this.checkAndAssignData();

    return (
      <div className="quoteBox-container">
        <div className="quote-info-container">
          <p>{quote}</p>
          <br />
          <p style={{ marginLeft: '50%' }}>{author}</p>
          <br />
          <p style={{ marginLeft: '50%', marginTop: '-10px' }}>{publication}</p>
        </div>
        <div className="quote-btns-container">
          <BtnNext
            title="&#8250;"
            handleBtnNextClick={this.handleBtnNextClick}
          />
          <BtnPrev
            title="&#8249;"
            handleBtnPrevClick={this.handleBtnPrevClick}
          />
        </div>
      </div>
    );
  }
}

export default QuoteBox;
