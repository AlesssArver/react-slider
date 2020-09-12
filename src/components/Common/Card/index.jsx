import React from 'react'

import './index.sass'

const Card = ({ children, title, width, height }) => {
    return (
        <div className="card" style={{ width, height }}>
            <div className="card__header">
                <div className="card__title">{ title }</div>
            </div>
            { children }
        </div>
    )
}

export default Card
