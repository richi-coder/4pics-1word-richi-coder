import React from 'react'
import { useSelector } from 'react-redux'
import "./styles/level.css"

function Level() {
    const level = useSelector(state => state.challenge).level;
  return (
    <div className='level text-white select-none w-1/4'>{level}</div>
  )
}

export default Level