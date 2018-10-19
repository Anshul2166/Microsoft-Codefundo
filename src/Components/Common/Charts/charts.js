import React from "react";
import { Chart, Axis, Series, Line } from "react-charts";
import Typography from "@material-ui/core/Typography";
import "./charts.css";

const LineChart = (
  <div className="chart-div">
  <Typography variant="display1" component="h2">
      <span className="title">Title</span>
    </Typography>
  <div className="chart-content-div">
    <Chart
      className="chart-in-dash"
      data={[
        {
          label: "Series 1",
          data: [[0, 1], [1, 2], [2, 4], [3, 2], [4, 7]]
        },
        {
          label: "Series 2",
          data: [[0, 3], [1, 1], [2, 5], [3, 6], [4, 4]]
        }
      ]}
    >
      <Axis primary type="time" />
      <Axis type="linear" />
      <Series type={Line} />
    </Chart>
  </div>
  </div>
);

export { LineChart };
