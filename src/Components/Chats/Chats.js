import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { sendMessage } from '../../Store/Chats/actions'
import { selectChats } from '../../Store/Chats/selectors'
import ChatList from '../ChatList/ChatList'
import Form from '../Form/Form'
import MessageField from '../MessageField/MessageField'


function Chats() {
    const chats = useSelector(selectChats)
    const dispatch = useDispatch()

    const { chatId } = useParams()

    const handleSendMessage = useCallback((newMessage) => {
        dispatch(sendMessage(chatId, newMessage))
    }, [chatId])

    useEffect(() => {
        if (!chatId || !chats[chatId]?.messages.length || chats[chatId].messages[chats[chatId].messages.length - 1].author === 'Robot') {
            return
        }
        const timeout = setTimeout(() => {
            const robotMessage = {
                author: 'Robot',
                text: 'I am Robot',
                id: Date.now()
            }
            dispatch(sendMessage(chatId, robotMessage))
        }, 1000)
        return () => clearTimeout(timeout)
    }, [chats])

return (
    <div className="root">
        <div className="chatList">
            <ChatList chats={chats} />
        </div>
        {!!chatId && (<div className="chatField">
            <MessageField messages={chats[chatId].messages} />
            <Form onSendMessage={handleSendMessage} />
        </div>)}
    </div>
)
}

export default Chats