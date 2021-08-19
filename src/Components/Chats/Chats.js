import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from "react-router-dom"
import ChatList from '../ChatList/ChatList'
import Form from '../Form/Form'
import MessageField from '../MessageField/MessageField'

const initialChats = {
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


function Chats() {
    const [chats, setChats] = useState(initialChats)

    const { chatId } = useParams()

    const handleSendMessage = useCallback((newMessage) => {
        setChats({
            ...chats,
            [chatId]: {
                ...chats[chatId],
                messages: [...chats[chatId].messages, newMessage]
            }
        })
    }, [chats, chatId])

    useEffect(() => {
        if (!chatId || !chats[chatId]?.messages.length || chats[chatId].messages[chats[chatId].messages.length - 1].author === 'Robot') {
            return
        }
        const timeout = setTimeout(() => {
            const robotMessage = {
                author: 'Robot',
                text: 'Hello, my name is Robot',
                id: Date.now()
            }
            setChats({
                ...chats,
                [chatId]: {
                    ...chats[chatId],
                    messages: [...chats[chatId].messages, robotMessage]
                }
            })
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