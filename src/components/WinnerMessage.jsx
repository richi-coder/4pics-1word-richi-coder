import React from 'react'
import "./styles/winnermessage.css"

function WinnerMessage() {
  return (
    <div className='h-1/2 w-full flex flex-col items-center justify-center select-none'>
        <h2 className='winner-message text-yellow-400 font-extrabold font-sans text-4xl z-50'>GREAT</h2>
    </div>
  )
}

export default WinnerMessage