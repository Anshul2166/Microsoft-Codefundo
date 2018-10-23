import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import cloud from "../../../Common/Images/cloud.png";
import speed from "../../../Common/Images/windspeed.png";
import strength from "../../../Common/Images/strength.png";
import distance from "../../../Common/Images/distance.png";
import "./Details.css";

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 1,
    padding: 5
  },
  avatar: {
    color: "black"
  },
  iconSmall: {
    float: "right"
  },
  caption: {
    float: "left"
  },
  verticalCenter: {
    marginTop: "auto",
    marginBottom: "auto"
  },
  content:{
    paddingTop:20
  }
});

const order = [strength, speed, distance, cloud];

class Details extends React.Component {
  render() {
    const { classes } = this.props;
    let data = this.props.data.parameters;
    let keys = Object.keys(data);

    const tornado = keys.map((key, index) => (
      <Grid className="" item lg={3} md={4} sm={6} xs={12}>
        <Card className={classes.card + " details-card"}>
          <CardHeader
            avatar={
              <Avatar
                src={order[index]}
                aria-label={key}
                className={classes.avatar}
              />
            }
            title={key}
            subheader={data[key].info}
          />
          <CardContent className={classes.content}>
            <Grid container spacing={24}>
              <Grid item sm={3} />
              <Grid className={classes.verticalCenter} item sm={9}>
                <Typography
                  variant="caption"
                  className={classes.verticalCenter + " " + classes.caption}
                >
                  Last updated {data[key].timestamp}
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    ));
    return (
      <Grid container spacing={24}>
        {tornado}
      </Grid>
    );
  }
}

Details.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Details);
