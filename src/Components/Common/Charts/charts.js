import React from "react";
import { Chart, Axis, Series, Line } from "react-charts";
import Typography from "@material-ui/core/Typography";
import "./charts.css";

const LineChart =(props)=> {
  console.log(props);
  return(
  <div className="chart-div">
    <Typography variant="display1" component="h2">
      <span className="title">Line Graph</span>
    </Typography>
    <div className="chart-content-div">
      <Chart
        className="chart-in-dash"
        data={props.data}
      >
        <Axis primary type="time" />
        <Axis type="linear" />
        <Series type={Line} />
      </Chart>
    </div>
  </div>
)};

export default LineChart;
