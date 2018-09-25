import React from 'react'

const test = [
  {
    answers: ["1", "2"],
    title: "A",
    titleCount: 1,
    type: "checkbox",
  },
  {
    title: "B",
    titleCount: 1,
    type: "text",
  }
]
const QuestionPicker = (props) => {
  return (
    <div className="question-list">
      {props.questions.map((question, idx) => (
        <div key={idx} className="question-list-card question-card">
          <div>
            <h2>{question.title}</h2>
          </div>
          <div>
            <span>Question type: {question.type}</span>
          </div>
          {question.answers > 0 && <div>
            <span>Answers:</span>
             <ul>
              {question.answers.map((answer, idx) => (
                <li key={idx}>{answer}</li>
              ))}
            </ul>
          </div>}
        <div className="remove-button" onClick={() => props.handleQuestionRemove(question)}>
          <span>Remove Question</span>
        </div>
      </div>
    ))}
  </div>
  )}

export default QuestionPicker

/*
answers: (2) ["1", "2"]
title: "A"
titleCount: 1
type: "checkbox"
*/