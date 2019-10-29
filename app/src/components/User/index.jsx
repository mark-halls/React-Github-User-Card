import React, { Component } from "react";

class User extends Component {
  constructor() {
    super();
    console.log(this);
  }

  render() {
    return (
      <>
        <p>{this.props.name}</p>
        <img src={this.props.avatar_url} alt="" />
        <p>Followers: {this.props.followers}</p>
        <p>Following: {this.props.following}</p>
      </>
    );
  }
}

export default User;
