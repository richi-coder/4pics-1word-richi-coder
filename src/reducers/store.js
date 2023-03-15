import * as reduxToolkit from '@reduxjs/toolkit'
import Dashboard from './Dashboard'
import ImageLoadReducer from './ImageLoadReducer'
import ImageReducer from './ImageReducer'
import Puzzle from './Puzzle'

const { configureStore } = reduxToolkit.default ?? reduxToolkit

const store = configureStore({
    reducer: {
        challenge: Puzzle,
        answer: Dashboard,
        image: ImageReducer,
        imageLoad: ImageLoadReducer
    }
})

export default store;