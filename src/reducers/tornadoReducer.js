//reducer for all activity-related
import * as ACTIONS from "../actions/actionTypes";

const tornadoReducer = (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.SHOW_TORNADO_DETAILS:
			return {
				...state,
				tornadoDetails: action.payload
            };
		default:
			return state;
	}
};

export default tornadoReducer;
