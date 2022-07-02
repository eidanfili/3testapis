import React, { Component } from "react";
import axios from "axios";

export default class UserCard extends Component {
  constructor() {
    super();
    this.state = {
      loading: true,
      userData: {},
    };
  }

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/")
      .then((response) => {
        console.log(response.data.results[0]);
        this.setState({
          userData: response.data.results[0],
          loading: false,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <div className="user-data">
        {this.state.loading ? null : (
          <div>
            <img src={this.state.userData.picture.thumbnail} />
            <h1>
              {this.state.userData.name.title +
                " " +
                this.state.userData.name.first +
                " " +
                this.state.userData.name.first}
            </h1>
          </div>
        )}
      </div>
    );
  }
}
