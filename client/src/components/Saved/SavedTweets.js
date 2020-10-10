import React, { Component } from "react";
import axios from "axios";
import DeleteButton from "../Saved/DeleteButton";

// import clsx from "clsx";
// import { makeStyles, useTheme } from "@material-ui/core/styles";
// import Drawer from "@material-ui/core/Drawer";
// import CssBaseline from "@material-ui/core/CssBaseline";
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import List from "@material-ui/core/List";
// import Typography from "@material-ui/core/Typography";
// import Divider from "@material-ui/core/Divider";
// import IconButton from "@material-ui/core/IconButton";
// import MenuIcon from "@material-ui/icons/Menu";
// import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
// import ChevronRightIcon from "@material-ui/icons/ChevronRight";
// import ListItem from "@material-ui/core/ListItem";
// import ListItemIcon from "@material-ui/core/ListItemIcon";
// import ListItemText from "@material-ui/core/ListItemText";
// import InboxIcon from "@material-ui/icons/MoveToInbox";
// import MailIcon from "@material-ui/icons/Mail";

class SavedTweets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
        };
    }

    componentDidMount = () => {
        this.getTweets();
    };


        handleDelete = (event) => {
            event.preventDefault();
            axios({
                url: '/api/tweets/:id',
                method: "delete",
                data: this.state.posts
            })
            .then(() => {
                console.log("Data Deleted!");
            })
            .catch((err) => {
                console.log("Server Error!");
                console.log(err);
            });
        }


  getTweets = () => {
    axios
      .get("/api/tweets")
      .then((response) => {
        const data = response.data;
        console.log("Data Received!");
        this.setState({ posts: data });
        console.log(this.state.posts);
      })
      .catch(() => {
        console.log("Error with Database!");
      });
  };

  handleDelete = (event) => {
    event.preventDefault();
    axios({
      url: "/api/tweets/:id",
      method: "delete",
      data: this.state.posts,
    })
      .then(() => {
        console.log("Data Deleted!");
      })
      .catch((err) => {
        console.log("Server Error!");
        console.log(err);
      });
  };

  render() {
    return (
      <div className="savedList">
        {this.state.posts.map((post) => (
          <div className="savedTweet">
            <img className="pic" src={post.pic} alt=""></img>
            <h2 className="name">{post.name}</h2>
            <h6 className="userName">@{post.username}</h6>
            <p className="following">{post.following} Following</p>
            <p className="followers">{post.followers} Followers</p>
            <p className="userTweet">{post.userTweet} Tweets</p>
            <p className="tweet">{post.tweet}</p>
            <p className="date">{post.date}</p>
            <p className="likes">{post.likes} Likes</p>
            <p className="retweets">{post.retweets} Retweets</p>
            <p className="replies">{post.replies} Replies</p>
            <DeleteButton handleDelete={this.handleDelete} />
          </div>
        ))}
      </div>
    );
  }
}

export default SavedTweets;
