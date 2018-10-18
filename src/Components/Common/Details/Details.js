import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import Grid from "@material-ui/core/Grid";
const styles = theme => ({
  card: {
    maxWidth: 600,
    margin:15
  },
  avatar: {
    backgroundColor: red[500],
  },
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
          title="Shrimp and Chorizo Paella"
          subheader="September 14, 2016"
        />
        <CardContent>
          <Typography variant="caption">
            This impressive paella is a perfect party dish and a fun meal to cook together with your
            guests. Add 1 cup of frozen peas along with the mussels, if you like.
          </Typography>
        </CardContent>
      </Card>
      </Grid>
    );
  }
}

Details.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Details);