import React, { Component } from "react";
import UserInfo from "./fetchingExample/UserInfo";
import UserWithExamination from "./fetchingExample/UserWithExamination";

class App extends Component {
  render() {
    return (
      <div className="App">
        <UserInfo id="123" />
        <UserWithExamination userId="userid" examId="examid" />
      </div>
    );
  }
}

export default App;
