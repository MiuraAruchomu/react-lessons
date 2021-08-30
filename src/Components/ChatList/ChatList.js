import React from 'react'
import { Link } from 'react-router-dom'
import { List } from '@material-ui/core'
import { ListItem } from '@material-ui/core'
import { AddChat } from '../AddChat/AddChat'

function ChatList({ chats }) {
    return (
        <List>
            {Object.values(chats).map((chat) => (
                <ListItem key={chat.id}>
                    <Link to={`/chats/${chat.id}`}>{chat.name}</Link>
                </ListItem>
            ))}
            <ListItem>
                <AddChat />
            </ListItem>
        </List>
    )
}

export default ChatList