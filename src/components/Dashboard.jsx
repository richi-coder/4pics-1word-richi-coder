import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeCorrectAnswer, initializeDashboard, setGameCondition } from '../reducers/Dashboard';
import Square from './Square';

function Dashboard() {
    const dispatch = useDispatch();
    const challenge = useSelector(state => state.challenge);
    const testing = useSelector(state => state.answer).dashboardResponse;
    const win = useSelector(state => state.answer).win;
    const answer = challenge.answer.split("");

    useEffect(() => {
        if (testing.length === 0) {
        dispatch(initializeDashboard(answer))
        dispatch(initializeCorrectAnswer(challenge.answer))
        dispatch(setGameCondition("started"))
        } 
        if (testing.filter(item => item !== null).length === answer.length && !win) {
            dispatch(setGameCondition("incorrect"))
        } 
        if (testing.filter(item => item!== null).length === answer.length && win) {
            dispatch(setGameCondition("winner"))
        }
    }, [testing])
    

    return (
    <div className={win ? 'flex flex-row gap-x-2 m-auto text-green-500' : "flex flex-row gap-x-2 m-auto"}>
        {
            answer.map((letter,i) => 
                <Square key={i} element={testing[i]} dashPos={i} />
            )
        }
        
    </div>
  )
}

export default Dashboard