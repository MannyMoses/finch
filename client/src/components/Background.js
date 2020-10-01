import React, { Component } from "react";
import "../assets/main.output.css";
import "../assets/styles/Background.css";

class Background extends Component {
  render() {
    return <div className="background" onClick={this.props.click} />;
  }
}

export default Background;
