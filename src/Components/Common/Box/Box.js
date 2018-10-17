import React from "react";
import { Grid, Paper } from "@material-ui/core";
import "./Box.css";

const Box = ({ children }) => (
  <Grid className="box-boundary" item xs={12} sm={6}>
    <Paper className="box-body">{children}</Paper>
  </Grid>
);

export default Box;
