const NewsAPI = require("newsapi");
require("dotenv").config();
const newsapi = new NewsAPI(process.env.NEWS_API);

var express = require("express");
var router = express.Router();

router.get("/", (req, res, next) => {
  console.log("Here");
  newsapi.v2
    .everything({
      q: "hurricane",
      sources: "bbc-news,the-verge",
      domains: "bbc.co.uk, techcrunch.com",
      from: "2018-10-01",
      to: "2018-10-25",
      language: "en",
      sortBy: "relevancy",
      page: 1
    })
    .then(response => {
      console.log(response.articles);
      res.json({ status: "success", data: response.articles });
    })
    .catch(err => res.json({ status: "fail", data: {} }));
});

module.exports = router;

// // To query /v2/everything
// // You must include at least one q, source, or domain
