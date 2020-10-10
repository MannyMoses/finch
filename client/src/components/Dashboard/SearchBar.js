import axios from 'axios';
import React, { Component } from 'react';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from "react-router-dom";
import clsx from "clsx";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuItem from "@material-ui/core/MenuItem";
import HomeIcon from "@material-ui/icons/Home";
import MenuList from "@material-ui/core/MenuList";
import SaveIcon from "@material-ui/icons/Save";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { makeStyles, useTheme } from "@material-ui/core/styles";
  
class SearchBar extends Component {

    constructor(props){
        super(props)
    }

    render() {
        
        return (
            <div className="searchBar">
                <AppBar position="static">
                    <Toolbar>
                    <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
                <form onSubmit={this.props.handleSubmit} action="">
                            <InputBase
                                className="input"
                                onChange={this.props.handleChange}
                                type="text"
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                    <Button variant="contained" color="primary">Search</Button>
                        </form>
                    </Toolbar>
                </AppBar>
                <Drawer
        variant="persistent"
        anchor="left"
      >
        <div>
        </div>
        <Divider />
        <MenuList>
          <MenuItem component={Link} to="/dashboard">
            {" "}
            <HomeIcon />
            Home
          </MenuItem>
          <MenuItem component={Link} to="/saved">
            <SaveIcon />
            Saved
          </MenuItem>
          <MenuItem component={Link} to="/">
            <ExitToAppIcon />
            Logout
          </MenuItem>
        </MenuList>
        <Divider />
      </Drawer>
            </div>
        )
    }
}

export default SearchBar;

