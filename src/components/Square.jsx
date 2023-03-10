import React from 'react'
import "./styles/square.css"

function Square({letter = ""}) {
  return (
    <div className='square'>{letter}</div>
  )
}

export default Square