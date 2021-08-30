import { combineReducers, createStore } from "redux";
import { chatsReducer } from "./Chats/reducer";
import { profileReducer } from "./Profile/reducer";

export const store = createStore(combineReducers({
    profile: profileReducer,
    chats: chatsReducer
}),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())