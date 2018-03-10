import React, { Component } from "react";
import { withLoading } from "./withLoading";
import { getUserInfo, getExaminationInfo } from "./backendApi";

class UserWithExamination extends Component {
  render() {
    return <div>{JSON.stringify(this.props.data)}</div>;
  }
}

export default withLoading([
  props => getUserInfo(props.userId),
  props => getExaminationInfo(props.examId)
])(UserWithExamination);
