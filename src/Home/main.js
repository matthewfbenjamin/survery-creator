import React from 'react'

import './home.css'

const Main = (props) => {
  return (
    <div className="description-wrapper">
      <form className="description-form" onSubmit={props.handleSubmit}>
        <label className="input-label-wrapper">
          <span>Title:</span>
          <input
            className="text-input"
            placeholder="Survey Title"
            autoFocus
            maxLength={100}
            type="text"
            name="title"
            required
            step={1}
            value={props.title.value}
            onChange={props.handleChange} />
          <span className="count">{props.title.count}/100</span>
        </label>
        <label className="input-label-wrapper input-label-wrapper--area">
          <span>Description:</span>
          <textarea
            className="text-input text-input--area"
            placeholder="Survey Description"
            maxLength={250}
            name="description"
            required
            step={2}
            value={props.description.value}
            onChange={props.handleChange} />
          <span>{props.description.count}/250</span>
        </label>
        <label className="input-label-wrapper">
          <span className="points-label">Points awarded upon completion</span>
          <input
            className="text-input"
            type="number"
            id="points"
            name="points"
            placeholder="Points awarded upon completion"
            min="1"
            max="100"
            onChange={props.handleNumberChange}
            value={props.points.value}
          />
          <div>
            {props.points.error && <span className="error-text">{props.points.error}</span>}
          </div>
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  )
}

export default Main
