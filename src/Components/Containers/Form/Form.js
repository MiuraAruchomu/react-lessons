import React, { useEffect, useState, useRef } from 'react'
import { Button } from '@material-ui/core'
import { Input } from '@material-ui/core'
import { useSelector } from 'react-redux'
import { selectName } from "../../../Store/Profile/selectors"
import { useInput } from '../../../CustomHooks/useInput'

export const Form = ({ onSendMessage }) => {
    const name = useSelector(selectName)
    const { value , handleChange, reset } = useInput('')

    const handleSubmit = (e) => {
        e.preventDefault()

        onSendMessage({
            author: name,
            text: value,
            id: Date.now()
        })
        reset()
    }

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current?.focus()
    }, [])

    return (
        <form>
            <Input value={value} onChange={handleChange} inputRef={inputRef} />
            <Button onClick={handleSubmit} variant="contained" color="primary">
                Отправить
            </Button>
        </form>
    )
}