import React, { useEffect, useState, useRef } from 'react'
import { Button } from '@material-ui/core'
import { Input } from '@material-ui/core'

function Form({ onSendMessage }) {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        onSendMessage({
            author: 'Me',
            text: value,
            id: Date.now()
        })
        setValue('')
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

export default Form