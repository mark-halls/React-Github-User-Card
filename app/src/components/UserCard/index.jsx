import React, { Component } from "react";

import User from "../User";
import Followers from "../Followers";

class UserCard extends Component {
  render() {
    return (
      <>
        <User {...this.props} />
        <h3>Followers</h3>
        <Followers user_followers={this.props.user_followers} />
      </>
    );
  }
}

export default UserCard;
