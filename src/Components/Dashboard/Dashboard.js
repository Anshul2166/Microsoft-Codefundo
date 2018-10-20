import React, { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Box from "../Common/Box/Box";
import { Grid } from "@material-ui/core";
import Map from "../Map/Map";
import Feed from "../Feed/Feed";
import SocialFeed from "../SocialFeed/SocialFeed";
import messages from "../../shared/messages";
import notifications from "../../shared/notifications";
import tornados from "../../shared/tornado";
import { LineChart } from "../Common/Charts/charts";
import SOS from "../SOS/SOS";
import Details from "../Common/Details/Details";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Header messages={messages} notifications={notifications} />
        <DashboardContent />
        <Footer />
      </div>
    );
  }
}

const title = "xs={12} sm={6}";
const DemoParagraph = () => <p>{title}</p>;

class DashboardContent extends Component {
  render() {
    const tornadoDetails = tornados.map((tornado, index) => (
      <Details data={tornado} key={index} />
    ));
    return (
      <div className="dash-content">
        {tornadoDetails}
        <Grid container spacing={24}>
          <Box children={<SOS/>} size={12} sm={12} md={12} backClass="blue-violet"/>
          <Box children={<Feed />} title="Local News Feed" size={6}/>
          <Box children={<SocialFeed />} title="Twitter Feed" size={5} className="shift-right"/>
          <Box children={<DemoParagraph />} sm={12} md={12} size={12}/>
          <Box children={LineChart} size={12} sm={12} md={12}/>
        </Grid>
      </div>
    );
  }
}

export default Dashboard;

// Removing the component that would render the map to avoid unneccesary api calls
// To add map
// <Box children={<Map/>}/>
