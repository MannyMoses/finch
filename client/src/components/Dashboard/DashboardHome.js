import React, {Component} from 'react';
import TwitterAPI from '../../utils/TwitterAPI'

class Dashboard extends Component {
    render() {
        return (
            <div className="dashboardDiv">
                <TwitterAPI />
            </div>
        )
    }
}

export default Dashboard;