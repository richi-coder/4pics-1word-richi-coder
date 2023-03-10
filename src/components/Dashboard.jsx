import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeDashboard } from '../reducers/Dashboard';
import Square from './Square';

function Dashboard() {
    const dispatch = useDispatch();
    const challenge = useSelector(state => state.challenge);
    const testing = useSelector(state => state.answer);
    const answer = challenge.answer.split("");

    useEffect(() => {
        
        dispatch(initializeDashboard(answer))
        
    }, [challenge])
    

    return (
    <div className='flex flex-row gap-x-2 m-auto'>
        {
            answer.map((letter,i) => 
                <Square letter={testing.dashboardResponse[i]} />
            )
        }
        
    </div>
  )
}

export default Dashboard