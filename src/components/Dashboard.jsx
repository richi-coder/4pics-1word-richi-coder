import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeCorrectAnswer, initializeDashboard, setGameCondition } from '../reducers/Dashboard';
import Square from './Square';
import "./styles/dashboard.css"

function Dashboard() {
    const dispatch = useDispatch();
    const gameCondition = useSelector(state => state.answer).gameCondition;
    const challenge = useSelector(state => state.challenge);
    const testing = useSelector(state => state.answer).dashboardResponse;
    const win = useSelector(state => state.answer).win;
    const answer = challenge.answer.split("");
    const dashboardStyle = "dashboard h-1/3 flex flex-row items-end justify-center"

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
    <div className={gameCondition === "started" ? `${dashboardStyle} text-white-500` : gameCondition === "incorrect" ? `${dashboardStyle} text-red-500` : gameCondition === "playing" ? `${dashboardStyle} text-blue-500` :  `${dashboardStyle} text-green-500`}>
        {
            answer.map((letter,i) => 
                <Square key={i} element={testing[i]} dashPos={i} />
            )
        }
        
    </div>
  )
}

export default Dashboard