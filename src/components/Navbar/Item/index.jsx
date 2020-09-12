import React from 'react'

import { NavLink } from 'react-router-dom'

import './index.sass'

const Item = ({ text, icon, path }) => {
    return (
        <NavLink to={path} className='navbar__item'>
            <div className='navbar__item__text'>{text}</div>
            <div className='navbar__icon'>
                <img src={icon} alt={`icon for ${text}`} />
            </div>
        </NavLink>
    )
}

export default Item
