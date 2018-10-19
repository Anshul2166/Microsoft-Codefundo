import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import Typography from "@material-ui/core/Typography";
import blue from "@material-ui/core/colors/blue";
import Grid from "@material-ui/core/Grid";
import logo from "../../../Common/Images/pressure.png";
import AlarmIcon from "@material-ui/icons/Alarm";

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 15,
    padding:10
  },
  avatar: {
    backgroundColor: blue[500]
  },
  iconSmall: {
    marginLeft: 15,
    marginRight: 15
  },
  verticalCenter:{
    marginTop:"auto", 
    marginBottom:"auto"
  }
});

class Details extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid item sm={3} xs={6}>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="Recipe" className={classes.avatar}>
                R
              </Avatar>
            }
            title="Tornado Pressure"
            subheader="100 atm"
          />
          <CardContent>
            <Grid container spacing={24}>
              <AlarmIcon className={classes.iconSmall}/>
              <Typography variant="caption" className={classes.verticalCenter}>Last updated 2 hours ago</Typography>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

Details.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Details);
