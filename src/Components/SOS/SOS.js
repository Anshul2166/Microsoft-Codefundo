import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import NavigationIcon from "@material-ui/icons/Navigation";
import Typography from "@material-ui/core/Typography";
import helpLogo from "../../Common/Images/help.png";
import "./SOS.css";
import { Avatar, Grid } from "@material-ui/core";

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  centerDiv: {
    marginLeft: "auto",
    marginRight: "auto"
  },
  avatar: {
    marginTop: "auto",
    marginBottom: "auto",
    marginLeft:"auto"
  },
  text:{
    float:"left"
  }
});

function SOS(props) {
  const { classes } = props;
  return (
    <div className="sos-box">
      <Typography gutterBottom variant="display1" className={classes.centerDiv}>
        <Grid container spacing={24}>
          <Grid item sm={4} />
          <Grid item sm={1}>
            <Avatar className={classes.avatar} src={helpLogo} />
          </Grid>
          <Grid item sm={5}>
            <span className={classes.text}>For your help</span>
          </Grid>
        </Grid>
      </Typography>
      <Typography gutterBottom paragraph={true} color="display4">
        Here's the SOS that you may launch(click) whenever you are in need for
        help. We will forward it to your local authorities and other volunteer
        services who can be in position to help you. Good luck!
      </Typography>
      <Button
        variant="extendedFab"
        color="secondary"
        aria-label="Delete"
        className={classes.button}
      >
        <NavigationIcon className={classes.extendedIcon} />
        Send an SOS
      </Button>
    </div>
  );
}

SOS.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SOS);
