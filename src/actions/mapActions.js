import * as ACTIONS from "./actionTypes";

export function showMap(data){
    return{
        type:ACTIONS.SHOW_MAP,
        payload:data
    }
}

export function animateMap(data){
    return{
        type:ACTIONS.ANIMATE_MAP,
        payload:data
    }
}