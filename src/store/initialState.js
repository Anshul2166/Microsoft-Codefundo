const initialState={
    chart:{
        chartData:[
            {
              label: "Series 1",
              data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
            },
            {
              label: "Series 2",
              data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
            }
          ]
    },
    map:{
        mapData:[],
        animatePoints:[]
    },
    news:{
        newsData:[],
        likedNews:[]
    },
    sos:{
        sosData:[]
    },
    twitter:{
        tweetList:[],
        tweetLikeList:[]
    }
};

export default initialState;