import React, { Component } from "react";
import axios from "axios";

import "./App.css";

class App extends Component {
  state = { user: {} };

  componentDidMount() {
    axios.get(`https://api.github.com/users/mark-halls`).then(res => {
      this.setState(
        {
          user: res.data
        },
        () => console.log(this.state)
      );
    });
  }

  render() {
    return <div></div>;
  }
}

export default App;
