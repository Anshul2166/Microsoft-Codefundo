import * as ACTIONS from "./actionTypes";

export function showChart(data){
    return{
        type:ACTIONS.SHOW_CHART,
        payload:data
    }
}