import React from 'react'
import cn from 'classnames'

import './index.sass'

const Button = ({ children, className, rounded, backgroundColor, uppercase }) => {
    return (
        <button className={cn('button', className, { 'button__rounded': rounded, 'text__uppercase': uppercase })} style={{ backgroundColor }}>{ children }</button>
    )
}

export default Button
