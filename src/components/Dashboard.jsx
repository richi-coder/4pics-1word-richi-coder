import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeDashboard } from '../reducers/Dashboard';
import Square from './Square';

function Dashboard() {
    const dispatch = useDispatch();
    const challenge = useSelector(state => state.challenge);
    const testing = useSelector(state => state.answer).dashboardResponse;
    const answer = challenge.answer.split("");
    console.log(answer, "ansnsnj")

    useEffect(() => {
        
        dispatch(initializeDashboard(answer))
        
    }, [])
    

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