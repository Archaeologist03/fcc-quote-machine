import React from "react";

import getAsyncData from "../../assets/utils/getAsyncData";

class QuoteBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
    };
  }

  componentDidMount() {
    getAsyncData().then(res => {
      this.setState({
        quote: res[0].quote,
      });
    });
  }

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.quote === this.state.quote) {
      console.log("quote is same");
    } else if (nextState.quote !== this.state.quote) {
      console.log("quote was changed");
    }

    return true;
  }
  render() {
    return (
      <div>
        <p>{this.state.quote}</p>
      </div>
    );
  }
}

export default QuoteBox;
