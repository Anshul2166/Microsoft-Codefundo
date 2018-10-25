//reducer for all activity-related
import * as ACTIONS from "../actions/actionTypes";

const mapReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.SHOW_MAP:
      return {
        ...state,
        mapData: action.payload
      };
    case ACTIONS.GET_SAFE_HOUSES:
      return {
        ...state,
        safeHouse: action.payload
      };
    case ACTIONS.ANIMATE_MAP:
      return {
        ...state,
        animatePoints: action.payload
      };
    default:
      return state;
  }
};

export default mapReducer;
