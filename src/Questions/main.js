import React from 'react'
import QuestionPicker from './components/QuestionPicker'

import './questions.css'

const Main = (props) => {
  return (
    <div className="questions-wrapper">
      <h1>Create Questions</h1>
      <QuestionPicker {...props} />
    </div>
  )
}

export default Main
