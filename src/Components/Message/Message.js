import React from 'react'

function Message({ author, text }) {
    if(!text) {
        text = ''
    }

    return (
        <div>
            {author}: {text}
        </div>
    )
}

export default Message