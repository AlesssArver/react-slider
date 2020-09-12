import React from 'react'

import './index.sass'

import CapacityIcon from 'assets/images/icons/capacity.svg'
import ScheduleIcon from 'assets/images/icons/schedule.svg'
import ManagementIcon from 'assets/images/icons/management.svg'
import CommunicationIcon from 'assets/images/icons/communication.svg'

import Item from './Item'

const navbarItems = [
    { id: 1, text: 'Capacity planning', icon: CapacityIcon, path: '/capacity' },
    { id: 2, text: 'Staggered schedules', icon: ScheduleIcon, path: '/schedule' },
    { id: 3, text: 'PPE management', icon: ManagementIcon, path: '/management' },
    { id: 4, text: 'Employee communication', icon: CommunicationIcon, path: '/communication' }
]

const Navbar = () => {
    return (
        <div className='navbar__wrapper'>
            <div className='navbar'>
                {navbarItems.map(n => <Item text={n.text} icon={n.icon} path={n.path} key={n.id} />)}
            </div>
        </div>
    )
}

export default Navbar
