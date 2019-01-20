import React, { Component } from "react";
import { connect } from "react-redux";
import { changeUserName } from "./actions";

class App extends Component {
  handleClick = () => {
    // Dispatch an event
    // Change username in store
    const user = { userName: "Xiao Hei" };
    this.props.changeUserName(user);
  };

  render() {
    return (
      <div>
        Hi {this.props.myUserName}
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}

function mapStateToProps(state) {
  // what kind of values do we want to use in current page?
  return {
    myUserName: state.user.userName
  };
}

export default connect(
  mapStateToProps,
  {
    changeUserName
  }
)(App);
