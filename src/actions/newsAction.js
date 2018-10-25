import * as ACTIONS from "./actionTypes";

export function showNewsFeed(){
    return{
        type:ACTIONS.SHOW_NEWS_FEED
        // payload:data
    }
}

export function likeNews(data){
    return{
        type:ACTIONS.LIKE_NEWS,
        payload:data
    }
}
