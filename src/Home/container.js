import React, { Component } from 'react'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'
import { bindActionCreators } from 'redux'

import Main from './main'
import * as dataActions from '../data/actions'

class Container extends Component {
  constructor (props) {
    super(props)
    autoBind(this)
    this.state = {
      title: {
        value: '',
        count: 0,
      },
      description: {
        value: '',
        count: 0,
      },
      textError: null,
      points: {
        value: 1,
        error: null,
      }
    }
  }

  handleChange (event) {
    this.setState({
      [event.target.name]: {
        ...this.state[event.target.name],
        value: event.target.value,
        count: event.target.value.length,
      }
    })
  }

  handleNumberChange (event) {
    const maxInt = parseInt(event.target.max, 10)
    const valueInt = parseInt(event.target.value, 10)
    let valueToUse = event.target.value
    let error = null
    if (valueInt > maxInt) {
      valueToUse = event.target.max
      error = 'Max amount is 100'
    }
    if (event.target.value)
    this.setState({
      [event.target.name]: {
        ...this.state[event.target.name],
        value: valueToUse,
        count: event.target.value.length,
        error,
      }
    })
  }

  handleSubmit (event) {
    if (this.state.title.count < 1 || this.state.description.count < 1) {
      this.setState({ textError: 'Please fill in all fields' })
    } else {
      this.props.dataActions.submitHomeForm({
        title: this.state.title.value,
        description: this.state.description.value,
        pointValue: this.state.points.value,
      })
      this.props.history.push('/questions')
      event.preventDefault()
    }
  }

  render() {
    return (
      <Main
        {...this.props}
        {...this.state}
        handleChange={this.handleChange}
        handleNumberChange={this.handleNumberChange}
        handleSubmit={this.handleSubmit}
      />
    );
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    dataActions: bindActionCreators(dataActions, dispatch),
    dispatch: dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);