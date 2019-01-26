import React from "react";

import "./QuoteBox.css";

import getAsyncData from "../../assets/utils/getAsyncData";
import Button from "../Button/Button";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quotes: [],
      count: 0,
      errorOccured: false,
      loaded: false,
    };
  }

  componentDidMount() {
    getAsyncData("thus spoke zarathustra", "title")
      .then(res => {
        this.setState({
          quotes: res.data.quotes,
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

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchedTerm !== this.props.searchedTerm) {
      getAsyncData(this.props.searchedTerm, this.props.searchedBy)
        .then(res => {
          this.setState(
            {
              quotes: res.data.quotes,
              errorOccured: false,
            },
            console.log(res.data.quotes),
          );
        })
        .catch(err =>
          this.setState({
            errorOccured: true,
          }),
        );
    }
  }

  handleButtonClick = () => {
    console.log(this.state.count);
    let prevCount = this.state.count;
    if (this.state.count === this.state.quotes.length - 1) {
      this.setState({
        count: 0,
      });
    } else {
      this.setState({
        count: (prevCount += 1),
      });
    }
  };

  render() {
    let quote = "";
    let author = "";
    let publication = "";

    if (this.state.quotes[0] && !this.state.errorOccured) {
      let ind = this.state.count;
      let currentQuoteData = this.state.quotes[ind];

      // quote = this.state.errorOccured
      //   ? "Ops, couldn't find anything like that. Try something else."
      //   : currentQuoteData.quote;
      quote = currentQuoteData.quote;
      author = currentQuoteData.author;
      publication = currentQuoteData.publication;
    } else if (this.state.loaded) {
      quote = "Ops, couldn't find anything like that. Try something else.";
      author = "";
      publication = "";
    }

    return (
      <div className="quoteBox-container">
        <p>{quote}</p>
        <br />
        <p>{author}</p>
        <br />
        <p>{publication}</p>
        <Button title="next" handleButtonClick={this.handleButtonClick} />
      </div>
    );
  }
}

export default QuoteBox;

// componentDidMount() {
//   getAsyncData().then(res => {
//     this.setState({
//       quote: res[0].quote,
//     });
//   });
// }

// shouldComponentUpdate(nextProps, nextState) {
//   if (nextState.quote === this.state.quote) {
//     console.log("quote is same");
//   } else if (nextState.quote !== this.state.quote) {
//     console.log("quote was changed");
//   }

//   return true;
// }
