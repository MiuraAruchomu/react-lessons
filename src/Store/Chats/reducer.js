import { ADD_CHAT, SEND_MESSAGE } from './actionTypes'

const initialState = {
    chat1: {
        name: 'chat1',
        id: 'chat1',
        messages: [{ author: 'Me', text: 'Hello', id: Date.now() }]
    },
    chat2: {
        name: 'chat2',
        id: 'chat2',
        messages: [{ author: 'SomeOne', text: 'Hi', id: Date.now() }]
    },
    chat3: {
        name: 'chat3',
        id: 'chat3',
        messages: []
    },
}

export const chatsReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case ADD_CHAT:
            return {
                ...state,
                [payload.chatId]: {
                    name: payload.name,
                    id: payload.chatId,
                    messages: []
                }
            }
        case SEND_MESSAGE:
            return {
                ...state,
                [payload.chatId]: {
                    ...state[payload.chatId],
                    messages: [...state[payload.chatId].messages, payload.message]
                }
            }
        default:
            return state
    }
}