import React, { Component } from 'react';
import { connect } from 'react-redux';

import Main from './main'

class Container extends Component {
  render() {
    return (
      <Main {...this.props} />
    );
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch: dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);