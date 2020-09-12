import React from 'react'

import './index.sass'

import { Panel } from 'components'

const Item = ({ text, count }) => {
    return (
        <Panel className='capacity--plan__item'>
            <div>{ text }</div>
            <div className='count'>{ count }</div>
        </Panel>
    )
}

export default Item
