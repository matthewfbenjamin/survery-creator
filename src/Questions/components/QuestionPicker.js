import React from 'react'

const QuestionPicker = (props) => {
  console.log(props)
  return (
    <div className="question-card">
      <form onSubmit={props.handleSubmit}>
        <div>
          <label className="input-label-wrapper">
            <span>Title:</span>
            <div className="title-input-wrapper">
              <input
                className="text-input"
                placeholder="Question Title"
                autoFocus
                maxLength={250}
                type="text"
                name="title"
                required
                step={1}
                value={props.currentQuestion.title}
                onChange={props.handleChange} />
            </div>
            <span className="count">{props.currentQuestion.titleCount}/250</span>
          </label>
        </div>
        <div>
          <ul className="radio-list">
            <li>
              <h3>Question Type</h3>
            </li>
            <li>
              <label>
                <input type="radio" name="type" value="text" checked={props.currentQuestion.type === 'text'} onChange={props.handleChange} />
                Textbox
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="type" value="checkbox" checked={props.currentQuestion.type === 'checkbox'} onChange={props.handleChange} />
                Check boxes
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="type" value="radio" checked={props.currentQuestion.type === 'radio'} onChange={props.handleChange} />
                Radio Buttons
              </label>
            </li>
          </ul>
        </div>
      </form>
      {props.currentQuestion.type !== 'text' &&
        <div>
          <div className="answer-input-wrapper">
            <input
              className="answer-text-input"
              placeholder="Answer"
              type="text"
              name="answer"
              required
              value={props.currentAnswer}
              onChange={props.handleAnswerChange} />
              <div className="answer-add" onClick={props.handleAnswerSubmit}>+</div>
          </div>
        {props.currentAnswerError && <span>{ props.currentAnswerError }</span>}
          <ul className="answer-list">
            {props.currentQuestion.answers.length > 0 && <li><h3>Current Answers:</h3></li>}
            {props.currentQuestion.answers.map(answer => (
              <li>
              <span className="answer-list-name">
                {answer}
              </span>
              <div className="answer-remove">-</div></li>)
            )}
          </ul>
        </div>
      }
      <div className="submit-button" onClick={props.handleSubmit}>
        <span>Add Question</span>
      </div>
    </div>
  )
}

export default QuestionPicker