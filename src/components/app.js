import React, { Component } from "react";
import axios from "axios";
import UserCard from "./card";

// make the axios call and console.log the data
// store the data in state
// render the data in the return/jsx
// call the card component multiple times

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
    };
  }
  componentDidMount() {
    this.setState({ loading: false });
  }

  render() {
    return (
      <div className="app">
        {this.state.loading ? (
          <h1>Loading your data...</h1>
        ) : (
          <div className="cards-container">
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
            <UserCard />
          </div>
        )}
      </div>
    );
  }
}
