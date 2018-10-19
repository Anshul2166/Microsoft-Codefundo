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
import AlarmIcon from "@material-ui/icons/Alarm";
import './Details.css';

const styles = theme => ({
  card: {
    maxWidth: 600,
    margin: 15,
    padding: 15,
    backgroundColor:"#395c6b"
  },
  avatar: {
    backgroundColor: "oldlace",
    color:"black"
  },
  iconSmall: {
    float:"right"
  },
  caption:{
    float:"left"
  },
  verticalCenter: {
    marginTop: "auto",
    marginBottom: "auto"
  }
});

class Details extends React.Component {
  render() {
    const { classes } = this.props;
    let data = this.props.data.parameters;    
    let keys = Object.keys(data);

    const tornado = keys.map((key, index) => (
      <Grid className="" item lg={3} md={4} sm={6} xs={12}>
        <Card className={classes.card+" details-card"}>
          <CardHeader
            avatar={
              <Avatar aria-label={key} className={classes.avatar}>
                {key.charAt(0)}
              </Avatar>
            }
            title={key}
            subheader={data[key].info}
          />
          <CardContent>
            <Grid container spacing={24}>
              <Grid item sm={3}>
                <AlarmIcon className={classes.iconSmall} />
              </Grid>
              <Grid className={classes.verticalCenter} item sm={9}>
                <Typography
                  variant="caption"
                  className={classes.verticalCenter +" "+classes.caption}
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
