import React, { Component } from "react";
import { Grid, Paper } from "@material-ui/core";
import './Box.css';
class Box extends Component {
  render() {
    return (
          <Grid className="box-boundary" item xs={12} sm={6}>
            <Paper className="box-body">xs=12 sm=6</Paper>
          </Grid>
      
    );
  }
}

export default Box;
