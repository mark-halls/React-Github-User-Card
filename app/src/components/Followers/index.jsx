import React, { Component } from "react";

class Followers extends Component {
  followers = () => {
    return this.props.user_followers;
  };

  render() {
    return (
      <>
        {this.followers() &&
          this.followers().map(follower => (
            <div key={follower.id}>{follower.login}</div>
          ))}
      </>
    );
  }
}

export default Followers;
