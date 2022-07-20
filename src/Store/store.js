import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { chatsReducer } from "./Chats/reducer"
import { profileReducer } from "./Profile/reducer"
import storage from 'redux-persist/lib/storage'
import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const persistConfig = {
    key: 'gbMessenger',
    storage
}

const rootReducer = combineReducers({
    profile: profileReducer,
    chats: chatsReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
)

export const persistor = persistStore(store)