import React, { Component } from "react";

const reflect = promise => {
  return promise.then(
    data => data,
    err => {
      throw err;
    }
  );
};

export const withLoading = fetchApi => WrappedComponent => {
  return class extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isFetching: true,
        isSuccess: false,
        isFailed: false,
        data: null,
        error: null
      };
    }

    componentDidMount() {
      this.setState({
        data: null,
        isFetching: true,
        isSuccess: false,
        isFailed: false,
        error: null
      });

      let fetchData = null;
      if (Array.isArray(fetchApi)) {
        fetchData = Promise.all(fetchApi.map(f => reflect(f(this.props))));
      } else {
        fetchData = fetchApi(this.props);
      }

      fetchData
        .then(data => {
          this.setState({
            data,
            isFetching: false,
            isSuccess: true,
            isFailed: false,
            error: null
          });
        })
        .catch(err => {
          this.setState({
            data: null,
            isFetching: false,
            isSuccess: false,
            isFailed: true,
            error: err
          });
        });
    }

    render() {
      if (this.state.isFetching) {
        return <div>fetching...</div>;
      }
      if (this.state.isFailed) {
        return <div>failed {this.state.isFailed}</div>;
      }
      return <WrappedComponent data={this.state.data} {...this.props} />;
    }
  };
};
