//reducer for all activity-related
import * as ACTIONS from "../actions/actionTypes";

const twitterReducer = (state = {}, action) => {
	switch (action.type) {
		case ACTIONS.SHOW_TWITTER_FEED:
			return {
				...state,
				tweetList: action.payload
            };
        case ACTIONS.LIKE_TWITTER:
			return {
				...state,
				tweetLikeList: action.payload
            };
		default:
			return state;
	}
};

export default twitterReducer;
