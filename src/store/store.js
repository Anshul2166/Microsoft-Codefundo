import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import chartReducer from "../reducers/chartReducer";
import mapReducer from "../reducers/mapReducer";
import newsReducer from "../reducers/newsReducer";
import sosReducer from "../reducers/sosReducer";
import twitterReducer from "../reducers/twitterReducer";
import thunk from "redux-thunk";
import initialState from "./initialState";

const rootReducer = combineReducers({
  chart: chartReducer,
  map: mapReducer,
  news: newsReducer,
  sos: sosReducer,
  twitter: twitterReducer
});

const middlewares = applyMiddleware(thunk);

// Just For Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancers(middlewares)
);

export default store;
