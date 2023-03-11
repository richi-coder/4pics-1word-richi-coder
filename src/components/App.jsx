import { configureStore } from '@reduxjs/toolkit'
import { useEffect } from 'react'
import { Provider } from 'react-redux'
import Dashboard from '../reducers/Dashboard'
import ImageReducer from '../reducers/ImageReducer'
import Puzzle from '../reducers/Puzzle'
import Game from './Game'


function App() {
    const store = configureStore({
        reducer: {
            challenge: Puzzle,
            answer: Dashboard,
            image: ImageReducer
        }
    })
    
  return (
    <Provider store={store}>
        <Game />
    </Provider>
  )
}

export default App