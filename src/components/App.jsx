
import { Provider } from 'react-redux'

import store from '../reducers/store'
import Game from './Game'




function App() {
    
  return (
    <Provider store={store}>
        <Game />
    </Provider>
  )
}

export default App