import * as ACTIONS from "./actionTypes";

export function showTwitterFeed(data){
    return{
        type:ACTIONS.SHOW_TWITTER_FEED,
        payload:data
    }
}

export function likeTwitter(data){
    return{
        type:ACTIONS.LIKE_TWITTER,
        payload:data
    }
}