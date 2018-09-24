import React from 'react'
import './full.css'

const Main = (props) => {
  return (
    <div className="full-wrapper">
      {props.children}
    </div>
  )
}

export default Main
