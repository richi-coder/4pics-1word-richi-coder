import React from 'react'
import { useSelector } from 'react-redux'
import Square from './Square';

function Dashboard() {
    const challenge = useSelector(state => state.challenge);
    const testing = useSelector(state => state.answer);
    const answer = challenge.answer.split("");
    //alert(answer)
  return (
    <div className='flex flex-row gap-x-2 m-auto'>
        {
            answer.map((letter,i) => 
                <Square letter={testing[i]} />
            )
        }
        
    </div>
  )
}

export default Dashboard