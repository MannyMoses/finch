import React, { Component } from "react";
import TwitterAPI from "../../utils/TwitterAPI";
import PersistentDrawerLeft from "./Drawer/Drawer";
import SearchBar from "./SearchBar";

class DashboardHome extends Component {
  render() {
    return (
        
        <div className="dashboardDiv">
          <TwitterAPI />
        </div>
      
    );
  }
}

export default DashboardHome;
