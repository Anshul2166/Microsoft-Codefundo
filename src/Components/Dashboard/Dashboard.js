import React, { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Box from "../Common/Box/Box";
import { Grid } from "@material-ui/core";
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

class DashboardContent extends Component {
  render() {
    return (
      <div className="dash-content">
        <p>This is the code content</p>
        <Grid container spacing={24}>
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
          <Box />
        </Grid>
      </div>
    );
  }
}

export default Dashboard;
