import * as actionTypes from '../actions/actionTypes';

const initialState = {
  searchedTerm: '',
  searchedBy: '',
  quotes: [],
};

const searchedTermChange = (state, action) => {
  console.log(action.text, 'from reducer');
  
  if (action.type === actionTypes.SEARCHED_TERM_CHANGE) {
    return {
      ...state,
      searchedTerm: action.text,
    };
  }
};

const searchedByChange = (state, action) => {
  if (action.type === actionTypes.SEARCHED_BY_CHANGE) {
    return {
      ...state,
      searchedBy: action.text,
    };
  }
};

const updateQuotesArr = (state, action) => {
  if (action.type === actionTypes.UPDATE_QUOTES_ARR) {
    return {
      ...state,
      quotes: action.quotesArr,
    };
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCHED_TERM_CHANGE:
      return searchedTermChange(state, action);
    case actionTypes.SEARCHED_BY_CHANGE:
      return searchedByChange(state, action);
    case actionTypes.UPDATE_QUOTES_ARR:
      return updateQuotesArr(state, action);
    default:
      return state;
  }
};

export default reducer;
