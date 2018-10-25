import * as ACTIONS from "./actionTypes";
import axios from "./axiosInstances"; // Pre configured axios instance

export function showMap(data){
    return{
        type:ACTIONS.SHOW_MAP,
        payload:data
    }
}

export function getSafehouses() {
    return dispatch => {
      axios
        .get("/safehouse")
        .then(resp => {
          console.log(resp);
          dispatch({
            type: ACTIONS.GET_SAFE_HOUSES,
            payload: resp
          });
  
        })
        .catch(err => {
          console.log(err + "Here");
          dispatch({
            type: ACTIONS.GET_SAFE_HOUSES + "_REJECTED",
            payload: err.response // We are using "err.reponse" to get error response text from server. If we just used "err" onely then we get axios manipulated error.
          });
        });
    };
  }

export function animateMap(data){
    return{
        type:ACTIONS.ANIMATE_MAP,
        payload:data
    }
}