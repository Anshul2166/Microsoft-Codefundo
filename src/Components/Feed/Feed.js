import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import "./Feed.css";

const NewsFeedCard = data => {
  return (
    <Card className="feed-card">
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {data.title}
          </Typography>
          <Typography component="p">
            {data.description}
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
  );
};

const feeds=[
    {
        "title":"Lizard",
        "description":"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
        "title":"Lizard",
        "description":"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
        "title":"Lizard",
        "description":"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
        "title":"Lizard",
        "description":"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    },
    {
        "title":"Lizard",
        "description":"Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica"
    }
];

class Feed extends Component {
  render() {
    const allFeeds=feeds.map((feed,index)=>
        <NewsFeedCard key={index} title={feed.title} description={feed.description} />
    );
    return (
      <div className="feed-div">
        {allFeeds}
      </div>
    );
  }
}

export default Feed;
