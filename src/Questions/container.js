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
      currentQuestion: {
        title: '',
        titleCount: 0,
        type: 'text',
        answers: [],
      },
      currentAnswer: '',
      currentAnswerError: null,
    }
  }

  handleChange (event) {
    const count = event.target.name === 'title' ? event.target.value.length : this.state.currentQuestion.titleCount
    const answersArr = event.target.name === 'type' ? [] : this.state.currentQuestion.answers
    this.setState({
      currentQuestion: {
        ...this.state.currentQuestion,
        [event.target.name]: event.target.value,
        titleCount: count,
        answers: answersArr,
      }
    })
  }

  handleAnswerChange (event) {
    this.setState({ currentAnswer: event.target.value })
  }

  handleAnswerSubmit (event) {
    if (this.state.currentAnswer.length > 0) {
      this.setState({
        currentQuestion: {
          ...this.state.currentQuestion,
          answers: [...this.state.currentQuestion.answers, this.state.currentAnswer]
        }
      })
    } else {
      this.setState({ currentAnswerError: 'Please fill in the field before hitting +' })
    }
    event.preventDefault()
  }

  handleSubmit (event) {
    if (this.state.title.count < 1 || this.state.description.count < 1) {
      this.setState({ textError: 'Please fill in all fields' })
    } else {
      this.props.dataActions.submitHomeForm(this.state)
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
        handleAnswerChange={this.handleAnswerChange}
        handleAnswerSubmit={this.handleAnswerSubmit}
        handleRadioChange={this.handleRadioChange}
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