import React from 'react'
import Routes from '../Routes/Routes'
import './App.css'
import { Provider } from 'react-redux'
import { persistor, store } from '../../../Store/store'
import { PersistGate } from 'redux-persist/integration/react'

export const App = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Routes />
      </PersistGate>
    </Provider>
  )
}
