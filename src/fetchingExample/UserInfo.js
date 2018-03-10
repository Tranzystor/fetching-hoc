import React, { Component } from "react";
import { getUserInfo, getExaminationInfo } from "./backendApi";
import { withLoading } from "./withLoading";

class UserInfo extends Component {
  render() {
    return <div>UserInfo: {JSON.stringify(this.props.data)}</div>;
  }
}

export default withLoading(props => getUserInfo(props.id))(UserInfo);
