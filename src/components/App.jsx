import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import Dashboard from '../reducers/Dashboard'
import Puzzle from '../reducers/Puzzle'
import Game from './Game'

function App() {
    const store = configureStore({
        reducer: {
            challenge: Puzzle,
            answer: Dashboard,
        }
    })
    
  return (
    <Provider store={store}>
        <Game />
    </Provider>
  )
}

export default App