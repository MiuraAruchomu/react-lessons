import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from "react-router-dom"
import { sendMessageWithThunk } from '../../../Store/Chats/actions'
import { selectChats } from '../../../Store/Chats/selectors'
import { ChatList } from '../../Presentation/ChatList/ChatList'
import { Form } from '../Form/Form'
import { MessageField } from '../../Presentation/MessageField/MessageField'


export const Chats = () => {
    const chats = useSelector(selectChats)
    const dispatch = useDispatch()

    const { chatId } = useParams()

    const handleSendMessage = useCallback((newMessage) => {
        dispatch(sendMessageWithThunk(chatId, newMessage))
    }, [chatId, dispatch])

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