//This component will be the container for all the components that would be shown in dashboard

import React from "react";
import { Grid, Paper } from "@material-ui/core";
import "./Box.css";

//Box is the main component that is rendered.
//children is special prop name in React, it will return the wrapped/children element that would show the children inside our box
//for '<Box><Element /><Box>', the children would be element

const Box = props => {
  console.log("Here inside");
  console.log(props);
  return (
    <Grid className="box-boundary" item xs={12} sm={props.size}>
      <Paper className="box-body">{props.children}</Paper>
    </Grid>
  );
};

export default Box;
