import { Provider } from 'react-redux'
import store from '../reducers/store'

function AppProvider({children}) {
  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}

export default AppProvider