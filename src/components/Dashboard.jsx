import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { initializeCorrectAnswer, initializeDashboard, setGameCondition } from '../reducers/Dashboard';
import Square from './Square';

function Dashboard() {
    const dispatch = useDispatch();
    const gameCondition = useSelector(state => state.answer).gameCondition;
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
    <div className={gameCondition === "started" ? 'flex flex-row gap-x-2 m-auto text-white-500' : gameCondition === "incorrect" ? 'flex flex-row gap-x-2 m-auto text-red-500' : gameCondition === "playing" ? 'flex flex-row gap-x-2 m-auto text-blue-500' :  "flex flex-row gap-x-2 m-auto text-green-500"}>
        {
            answer.map((letter,i) => 
                <Square key={i} element={testing[i]} dashPos={i} />
            )
        }
        
    </div>
  )
}

export default Dashboard