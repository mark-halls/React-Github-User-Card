import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import UserCard from "./components/UserCard";

class App extends Component {
  state = { user: {} };

  componentDidMount() {
    Promise.all([
      axios.get(`https://api.github.com/users/mark-halls`),
      axios.get(`https://api.github.com/users/mark-halls/followers`)
    ])
      .then(([res1, res2]) => {
        this.setState(
          {
            user: {
              ...res1.data,
              user_followers: res2.data
            }
          },
          () => console.log(this.state)
        );
      })
      .catch(err => console.error(err));
  }

  render() {
    return <UserCard {...this.state.user} />;
  }
}

export default App;
