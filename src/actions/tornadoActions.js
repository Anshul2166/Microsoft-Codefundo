import * as ACTIONS from "./actionTypes";

export function renderDetails(data){
    return{
        type:ACTIONS.SHOW_TORNADO_DETAILS,
        payload:data
    }
}