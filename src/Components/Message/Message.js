import React from 'react'

function Message({ author, text }) {
    return (
        <div>
            {author}: {text}
        </div>
    )
}

export default Message