import React, { useCallback } from 'react'
import { Message } from '../Message/Message'

export const MessageField = ({messages}) => {
    const renderMessage = useCallback((message) => (
        <Message text={message.text} author={message.author} key={message.id} />
    ), [])

    return messages.map(renderMessage)
}