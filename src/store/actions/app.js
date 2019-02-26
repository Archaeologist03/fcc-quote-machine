import * as actionTypes from './actionTypes';

export const searchedTermChange = text => {
  return {
    type: actionTypes.SEARCHED_TERM_CHANGE,
    text: text,
  };
};

export const searchedByChange = text => {
  return {
    type: actionTypes.SEARCHED_BY_CHANGE,
    text: text,
  };
};

export const updateQuotesArr = quotesArr => {
  return {
    type: actionTypes.UPDATE_QUOTES_ARR,
    quotesArr: quotesArr,
  }
}