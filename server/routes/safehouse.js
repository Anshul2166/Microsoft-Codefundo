var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
const MONGO_URL =
  "mongodb://codefundo:ans1234@ds016098.mlab.com:16098/safehouse";

router.get("/", (req, res, next) => {
  console.log("Here");

  MongoClient.connect(
    MONGO_URL,
    (err, client) => {
      if (err) {
        console.log(err);
        return res.json({ status: "failed", resp: {} });
      }
      var db = client.db("safehouse");
      // Do something with db here, like inserting a record
      db.collection("places").findOne(
        {
          location: {
            $nearSphere: {
              $geometry: {
                type: "Point",
                coordinates: [17.5439403, 78.5728567]
              },
              $maxDistance: 5 * 1609.34
            }
          }
        },
        function(err, data) {
          // console.log(data);
          if (err) {
            console.log(err);
            res.json({ status: "failed", resp: {} });
          }
          // Success
          console.log(data);
          client.close();
          res.json({ status: "success", resp: data });
        }
      );
    }
  );
});

module.exports = router;
