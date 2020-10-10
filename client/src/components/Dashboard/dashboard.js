import React, { Component } from 'react';
import Drawer from './Drawer/Drawer';

class Dashboard extends Component {
    render() {
        return (
            <Drawer>
            <div className="dashboardDiv">
                <div className="keywordDiv">
                    {// <Keyword /> 
                    }
                </div>
                <div className="cardDiv">
                    {
                     // < Card /> (10)
                    }
                </div>
                </div>
            </Drawer>
        )
    }
}

export default Dashboard;