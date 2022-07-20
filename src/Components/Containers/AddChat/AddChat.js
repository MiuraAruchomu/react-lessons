import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addChat } from '../../../Store/Chats/actions'
import { useInput } from '../../../CustomHooks/useInput'

export const AddChat = () => {
    const dispatch = useDispatch()
    const { value, handleChange, reset } = useInput('')

    const handleSubmit = (e) => {
        e.preventDefault()

        if(!value) {
            return
        }

        const newId = Date.now()
        dispatch(addChat(value, newId))
        reset()
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