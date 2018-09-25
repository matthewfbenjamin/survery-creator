import React, { Component } from 'react'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'

import Main from './main'
import * as dataActions from '../data/actions'

class Container extends Component {
  constructor(props) {
    super(props)
    autoBind(this)
    this.state = {}
  }

  componentDidMount () { 
    if (!this.props.home.title || this.props.questions.length <=0) {
      this.props.history.push('/')
    } else {
      console.log(JSON.stringify({
        ...this.props.home,
        questions: this.props.questions,
      }, null, 2))
    }
  }

  render() {
    return (
      <Main
        {...this.props}
        {...this.state}
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    home: state.data.homeFormValues,
    questions: state.data.questions,
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);