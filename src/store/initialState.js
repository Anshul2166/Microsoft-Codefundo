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
        animatePoints:[],
        safeHouse:[]
    },
    news:{
        newsData:[ {
            title: "Resuce operation",
            description:
              "Volunteers have launched a rescue operation near the coastal regions and an estimate 50,000 have been evacuated"
          },
          {
            title: "Lizard",
            description:
              "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          },
          {
            title: "Lizard",
            description:
              "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          },
          {
            title: "Lizard",
            description:
              "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          },
          {
            title: "Lizard",
            description:
              "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
          }],
        likedNews:[]
    },
    sos:{
        sosData:[]
    },
    twitter:{
        tweetList:[{
            "name":"Anshul",
            "date":"September 14,2017",
            "description":"There has been a massive tornado approaching the city gates that has driven the people crazy."
        },
        {
            "name":"Anshul",
            "date":"September 14,2017",
            "description":"There has been a massive tornado approaching the city gates that has driven the people crazy."
        },
        {
            "name":"Anshul",
            "date":"September 14,2017",
            "description":"There has been a massive tornado approaching the city gates that has driven the people crazy."
        }],
        tweetLikeList:[]
    },
    tornado:{
        tornadoDetails:[{
            parameters:{
              "Hurricane Strength":{
                "info":"Moderate",
                "timestamp":"2 hours ago"
              },
              "Hurricane Speed": {
                "info":"35 mph",
                "timestamp":"3 hours ago"
              },
              "Distance from coast": {
                "info":"75 miles",
                "timestamp":"2 hours ago"
              },
              "Wind Speed": {
                "info":"100 mph",
                "timestamp":"2 hours ago"
              }
            }
          }]
    }
};

export default initialState;