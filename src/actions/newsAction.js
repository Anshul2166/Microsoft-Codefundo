import * as ACTIONS from "./actionTypes";
import axios from "./axiosInstances"; // Pre configured axios instance

export function showNewsFeed() {
  return dispatch => {
    axios
      .get("/news")
      .then(resp => {
        let allNews = [];
        let data = resp.data.data;
        for (var i in data) {
          let news=data[i];
          let newsInstance = {
            title: news.title,
            description: news.description
          };
          allNews.push(newsInstance);
        }
        dispatch({
          type: ACTIONS.SHOW_NEWS,
          payload: allNews
        });

      })
      .catch(err => {
        console.log(err + "Here");
        dispatch({
          type: ACTIONS.SHOW_NEWS + "_REJECTED",
          payload: err.response // We are using "err.reponse" to get error response text from server. If we just used "err" onely then we get axios manipulated error.
        });
      });
  };
}
