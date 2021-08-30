import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addChat } from '../../Store/Chats/actions'

export const AddChat = () => {
    const dispatch = useDispatch()

    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!value) {
            return
        }

        const newId = Date.now()
        dispatch(addChat(value, newId))
        setValue('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={handleChange} value={value} />
            <button onClick={handleSubmit}>
                Add chat
            </button>
        </form>
    )
}