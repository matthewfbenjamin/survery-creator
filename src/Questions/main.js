import React from 'react'
import QuestionPicker from './components/QuestionPicker'
import QuestionList from './components/QuestionList'

import './questions.css'

const Main = (props) => {
  return (
    <div className="questions-wrapper">
      <h1>Create Questions</h1>
      <QuestionPicker {...props} />
      <QuestionList {...props} />
      {props.submitError && <span>{props.submitError}</span>}
      <div className="next-button" onClick={props.submitSurvey}>
        <span>See Survey</span>
      </div>
    </div>
  )
}

export default Main
