import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import feeds from "../../shared/feeds";
import "./Feed.css";

const NewsFeedCard = data => {
  return (
    <div className="feed-div">
      <Card className="feed-card">
        <CardActionArea>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              <span className="title">{data.title}</span>
            </Typography>
            <Typography component="p">
              <span className="title">{data.description}</span>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions className="card-actions-row">
          <IconButton aria-label="Add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="Share">
            <ShareIcon />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
};

class Feed extends Component {
  render() {
    const allFeeds = feeds.map((feed, index) => (
      <NewsFeedCard
        key={index}
        title={feed.title}
        description={feed.description}
      />
    ));
    return (
      <div className="feed-div">
        <Typography gutterBottom variant="display1" component="h2">
          <span className="title">News feed</span>
        </Typography>
        {allFeeds}
      </div>
    );
  }
}

export default Feed;
