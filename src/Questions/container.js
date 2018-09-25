import React, { Component } from 'react'
import { connect } from 'react-redux'
import autoBind from 'react-autobind'
import { bindActionCreators } from 'redux'

import Main from './main'
import * as dataActions from '../data/actions'

const initState = {
  currentQuestion: {
    title: '',
    titleCount: 0,
    type: 'text',
    answers: [],
  },
  currentAnswer: '',
  currentAnswerError: null,
  currentQuestionError: null,
  submitError: null,
}

class Container extends Component {
  constructor (props) {
    super(props)
    autoBind(this)
    this.state = initState
  }

  componentDidMount() {
    if (!this.props.home.title) {
      this.props.history.push('/')
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
        currentAnswerError: null,
        currentAnswer: '',
        currentQuestion: {
          ...this.state.currentQuestion,
          answers: [...this.state.currentQuestion.answers, this.state.currentAnswer]
        }
      })
    } else {
      this.setState({ currentAnswerError: 'Please fill in the answer field' })
    }
    event.preventDefault()
  }

  handleAnswerRemove (answerToRemove) {
    const answerArrClone = [...this.state.currentQuestion.answers]
    const filteredArr = answerArrClone.filter(answer => answer !== answerToRemove)
    this.setState({
      currentQuestion: {
        ...this.state.currentQuestion,
        answers: filteredArr,
      }
    })
  }

  handleQuestionSubmit (event) {
    if (this.state.currentQuestion.titleCount < 1) {
      this.setState({ currentQuestionError: 'Please add a title' })
    } else if (this.state.currentQuestion.type !== 'text' && this.state.currentQuestion.answers.length < 1) {
      this.setState({ currentQuestionError: 'Please add a least 1 answer' })
    } else {
      const questionJSON = {...this.state.currentQuestion}
      delete questionJSON.titleCount
      if (this.state.currentQuestion.type === 'text') delete questionJSON.answers
      this.props.dataActions.submitQuestion(questionJSON)
      this.setState(initState)
      event.preventDefault()
    }
  }

  handleQuestionRemove (questionObj) {
    const confirmDelete = window.confirm('Are you sure you want to delete this question?')
    if (confirmDelete) {
      const questionArrClone = [...this.props.questions]
      const questionObjToRemoveJson = JSON.stringify(questionObj)
      const filteredArr = questionArrClone.filter(question => {
        const questionObjJson = JSON.stringify(question)
        return questionObjToRemoveJson !== questionObjJson
      })
      this.props.dataActions.updateQuestionsArr(filteredArr)
    } 
  }

  submitSurvey () {
    if (this.props.questions.length <= 0) {
      this.setState({
        submitError: 'Please include at least 1 question',
      })
    } else {
      this.props.history.push('/results')
    }
  }

  render() {
    return (
      <Main
        {...this.props}
        {...this.state}
        handleChange={this.handleChange}
        handleNumberChange={this.handleNumberChange}
        handleQuestionSubmit={this.handleQuestionSubmit}
        handleAnswerChange={this.handleAnswerChange}
        handleAnswerSubmit={this.handleAnswerSubmit}
        handleRadioChange={this.handleRadioChange}
        handleAnswerRemove={this.handleAnswerRemove}
        handleQuestionRemove={this.handleQuestionRemove}
        submitSurvey={this.submitSurvey}
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
    dataActions: bindActionCreators(dataActions, dispatch),
    dispatch: dispatch,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Container);