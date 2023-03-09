import { configureStore } from '@reduxjs/toolkit'
import { Provider } from 'react-redux'
import Puzzle from '../reducers/Puzzle'
import Game from './Game'

function App() {
    const store = configureStore({
        reducer: {
            challenge: Puzzle
        }
    })
    
  return (
    <Provider store={store}>
        <Game />
    </Provider>
  )
}

export default App