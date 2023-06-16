import React, { useState } from 'react'
import "./styles/winneranimation.css"

function WinnerAnimation() {
    const [elements, setElements] = useState(new Array(10).fill(0))
  return (
    <div className='winner-animation'>
        {/* {
            elements.map((element,i) => <div key={i} className='animation-element'></div>)
        } */}
    </div>
  )
}

export default WinnerAnimation