import React from 'react'
import cn from 'classnames'

import './index.sass'

import { Panel } from 'components'

const Alert = ({ className, text, color }) => {
    return (
        <Panel className={cn('alert', className)}  color={color}>{ text }</Panel>
    )
}

export default Alert
