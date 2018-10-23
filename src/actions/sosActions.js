import * as ACTIONS from "./actionTypes";

export function launchHelp(data){
    return{
        type:ACTIONS.LAUNCH_SOS,
        payload:data
    }
}
