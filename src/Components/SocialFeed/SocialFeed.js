import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import red from "@material-ui/core/colors/red";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import socialInfo from "../../shared/socialInfo";

const styles = theme => ({
  card: {
    maxWidth: 450,
    margin: "5%",
    padding: "2.5%",
    border: "1px solid floralwhite",
    height: "fit-content",
    overflow: "hidden"
  },
  actions: {
    display: "flex"
  },
  avatar: {
    backgroundColor: red[500]
  },
  text: {
    color: "black!important"
  },
  centerDiv: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  socialFeed: {
    height: "35vh",
    overflow: "auto",
    margin:"2.5%"    
  },
  title:{
    margin:"2.5%"
  }
});

class SocialFeed extends React.Component {
  render() {
    const { classes } = this.props;
    const FeedCard = data => {
      console.log(data);
      return (
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                {data.data.name.charAt(0)}
              </Avatar>
            }
            subheader={data.data.date}
          />
          <CardContent>
            <Typography component="p" className={classes.text}>
              {data.data.description}
            </Typography>
          </CardContent>
          <CardActions className={classes.actions} disableActionSpacing>
            <IconButton
              className={classes.centerDiv}
              aria-label="Add to favorites"
            >
              <FavoriteIcon />
            </IconButton>
            <IconButton className={classes.centerDiv} aria-label="Share">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      );
    };
    const allSocialFeeds = socialInfo.map((data, index) => (
      <FeedCard data={data} key={index} />
    ));
    return (
      <div className={classes.socialFeed}>
        <Typography gutterBottom variant="display1" component="h2">
          <span className={classes.title}>Twitter feed</span>
        </Typography>
        {allSocialFeeds}
      </div>
    );
  }
}

SocialFeed.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SocialFeed);
