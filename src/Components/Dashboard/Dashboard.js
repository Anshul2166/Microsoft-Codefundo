import React,{Component} from "react";
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import './Dashboard.css';

class Dashboard extends Component{
    render(){
        return(
            <div className="dashboard">
                <Header />
                <DashboardContent />
                <Footer />
            </div>
        );
    }
}

class DashboardContent extends Component{
    render(){
        return(
            <div className="dash-content">
                <p>This is the code content</p>
            </div>
        );
    }
}

export default Dashboard;