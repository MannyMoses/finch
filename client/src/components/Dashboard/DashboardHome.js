import React, { Component } from "react";
import TwitterAPI from "../../utils/TwitterAPI";
import PersistentDrawerLeft from "./Drawer/Drawer";

class DashboardHome extends Component {
  render() {
    return (
      <PersistentDrawerLeft>
        <div className="dashboardDiv">
          <TwitterAPI />
        </div>
      </PersistentDrawerLeft>
    );
  }
}

export default DashboardHome;
