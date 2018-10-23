//reducer for all activity-related
import * as ACTIONS from "../actions/actionTypes";

const sosReducer = (state = {}, action) => {
  switch (action.type) {
    case ACTIONS.LAUNCH_SOS:
      return {
        ...state,
        sosData: action.payload
      };
    default:
      return state;
  }
};

export default sosReducer;
