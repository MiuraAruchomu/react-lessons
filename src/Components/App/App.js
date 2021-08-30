import React from 'react'
import Routes from '../Routes/Routes'
import './App.css'
import { Provider } from 'react-redux'
import { store } from '../../Store/store'

function App() {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  )
}

export default App;
