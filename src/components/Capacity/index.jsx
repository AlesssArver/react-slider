import React from 'react'
import cn from 'classnames'

import './index.sass'

import { Card, Alert, Button } from 'components'

import Item from './Item'

const planItems = [
    { text: 'Whats the max capacity for this site?', count: 60  },
    { text: 'Alert on occupancy limit', count: 100  }
]

const Capacity = ({ currentSlide }) => {
    return (
        <div className={cn('content__wrapper', currentSlide === 0 && 'content__wrapper__active')}>
            <div className='content'>
            <div className="content__title">Capacity planning</div>
            <div className="content__description">Set capacity limits and turn on alerts to limit access when the building reaches capacity. Ensure social distancing and avoid overcrowding.</div>
            <Card title='Set yor plan'>
                {planItems.map(p => <Item text={p.text} count={p.count} key={p.text} />)}
                <Alert className='capacity__alert alert__danger' text='Deny access when is reached' color='#FFF' />
                <Button rounded>Done</Button>
            </Card>
        </div>
        </div>
    )
}

export default Capacity
