import React, { Component } from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Box from "../Common/Box/Box";
import { Grid } from "@material-ui/core";
// import Map from "../Map/Map";
import Feed from "../Feed/Feed";
import SocialFeed from "../SocialFeed/SocialFeed";
import messages from "../../shared/messages";
import notifications from "../../shared/notifications";
// import tornados from "../../shared/tornado";
import LineChart  from "../Common/Charts/charts";
import SOS from "../SOS/SOS";
import Details from "../Common/Details/Details";
import { connect } from "react-redux";
import "./Dashboard.css";

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard">
        <Header messages={messages} notifications={notifications} />
        <DashboardContent hurricane={this.props.hurricaneData} tweets={this.props.tweets} chartData={this.props.chartData} newsFeed={this.props.newsFeed}/>
        <Footer />
      </div>
    );
  }
}

const title = "xs={12} sm={6}";
const DemoParagraph = () => <p>{title}</p>;

class DashboardContent extends Component {
  constructor(props){
    super(props);
    this.state={
      data:[]
    }
  }
  render() {
    console.log(this.props);
    const hurricane=this.props.hurricane;
    const tornadoDetails = hurricane.map((tornado, index) => (
      <Details data={tornado} key={index} />
    ));
    return (
      <div className="dash-content">
        {tornadoDetails}

        <Grid container spacing={24}>
          <Box children={<SOS />} size={12} sm={12} md={12} />
          <Box children={<Feed newsFeed={this.props.newsFeed}/>} title="Local News Feed" size={6} />
          <Box
            children={<SocialFeed tweets={this.props.tweets}/>}
            title="Twitter Feed"
            size={5}
            className="shift-right"
          />
          <Box children={<DemoParagraph />} sm={12} md={12} size={12} />
          <Box
            children={<LineChart data={this.props.chartData}/>}
            size={12}
            sm={12}
            md={12}
          />
        </Grid>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    chartData: state.chart.chartData,
    hurricaneData:state.tornado.tornadoDetails,
    tweets:state.twitter.tweetList,
    newsFeed:state.news.newsData
  };
}

export default connect(mapStateToProps)(Dashboard);

// Removing the component that would render the map to avoid unneccesary api calls
// To add map
// <Box children={<Map/>}/>
