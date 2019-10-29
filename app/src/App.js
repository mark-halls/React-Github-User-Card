import React, { Component } from "react";
import axios from "axios";

import "./App.css";
import UserCard from "./components/UserCard";

class App extends Component {
  state = { user: {} };

  componentDidMount() {
    axios
      .get(`https://api.github.com/users/mark-halls`)
      .then(res => {
        this.setState(
          {
            user: res.data
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
