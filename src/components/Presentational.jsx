import React from 'react'
import { Provider } from 'react-redux'
import store from '../reducers/store'
import Dashboard from './Dashboard'
import ImageContainer from './ImageContainer'

function Presentational() {
  return (
    <Provider store={store}>
        <div className='w-screen relative mx-auto'>
        <ImageContainer />
        <Dashboard />
        </div>
    </Provider>
  )
}

export default Presentational