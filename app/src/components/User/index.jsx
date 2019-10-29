import React, { Component } from "react";

class User extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="user">
        <p>{this.props.name}</p>
        <img src={this.props.avatar_url} alt="" />
        <p>Followers: {this.props.followers}</p>
        <p>Following: {this.props.following}</p>
      </div>
    );
  }
}

export default User;
