import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import NavigationIcon from "@material-ui/icons/Navigation";
import Typography from "@material-ui/core/Typography";
import './SOS.css';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});

function SOS(props) {
  const { classes } = props;
  return (
    <div className="sos-box">
      <Typography gutterBottom variant="display1">
        <span className="title">For your help</span>
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
