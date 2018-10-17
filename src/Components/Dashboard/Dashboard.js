import React, { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Box from "../Common/Box/Box";
import { Grid } from "@material-ui/core";
import Map from "../Map/Map";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Header />
        <DashboardContent />
        <Footer />
      </div>
    );
  }
}

const title="xs={12} sm={6}";
const DemoParagraph=()=>(
    <p>{title}</p>
);

class DashboardContent extends Component {
  render() {
    return (
      <div className="dash-content">
        <p>This is the code content</p>
        <Grid container spacing={24}>
          <Box children={<DemoParagraph/>}/>
          <Box children={<DemoParagraph/>}/>
          <Box children={<DemoParagraph/>}/>
          <Box children={<DemoParagraph/>}/>
          <Box children={<DemoParagraph/>}/>
          <Box children={<DemoParagraph/>}/>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;

// Removing the component that would render the map to avoid unneccesary api calls
// To add map
// <Box children={<Map/>}/>