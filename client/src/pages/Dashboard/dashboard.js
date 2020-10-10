import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions/authActions';
import TwitterAPI from '../../utils/TwitterAPI';
import DashboardHome from '../../components/Dashboard/DashboardHome'
import SavedTweets from '../../components/Saved/SavedTweets';


class Dashboard extends Component {
    onLogoutClick = e => {
        e.preventDefault();
        this.props.logoutUser();
    };

    render() {
        const { user } = this.props.auth;

    return (
        <div>
            <h3>You are sucessfully logged out.</h3>
            <button onClick={this.onLogoutClick}>Logout</button>
            <SavedTweets />
        </div>
        );
    }
}

Dashboard.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps,
    { logoutUser }
)(Dashboard);