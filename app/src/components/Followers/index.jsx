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
            <div className="follower" key={follower.id}>
              <img src={follower.avatar_url} alt="" />
              <p>{follower.login}</p>
            </div>
          ))}
      </>
    );
  }
}

export default Followers;
