import { ADD_CHAT, DELETE_CHAT, SEND_MESSAGE } from "./actionTypes"

export const addChat = (name, chatId) => ({
    type: ADD_CHAT,
    payload: {
        name,
        chatId
    }
})

export const sendMessage = (chatId, message) => ({
    type: SEND_MESSAGE,
    payload: {
        chatId,
        message
    }
})