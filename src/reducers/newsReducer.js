//reducer for all activity-related
import * as ACTIONS from "../actions/actionTypes";

const newsReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_NEWS:
      return {
        ...state,
        newsData: action.payload
      };
    case ACTIONS.LIKE_NEWS:
      return {
        ...state,
        likedNews: action.payload
      };
    default:
      return state;
  }
};

export default newsReducer;
