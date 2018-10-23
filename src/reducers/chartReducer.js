//reducer for all activity-related
import * as ACTIONS from "../actions/actionTypes";

const chartReducer = (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.SHOW_CHART:
			return {
				...state,
				chartData: action.payload
            };
		default:
			return state;
	}
};

export default chartReducer;
