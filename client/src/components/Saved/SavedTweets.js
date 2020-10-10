import React, { Component } from "react";
import axios from "axios";
import DeleteButton from "../Saved/DeleteButton";

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
    .catch(() => {
      console.log("Server Error!");
    });
};

render();
{
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

export default SavedTweets;
