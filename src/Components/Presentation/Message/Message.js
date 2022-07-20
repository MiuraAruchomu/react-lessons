import React from 'react'

export const Message = ({ author, text }) => {
    if(!text) {
        text = ''
    }

    return (
        <div>
            {author}: {text}
        </div>
    )
}