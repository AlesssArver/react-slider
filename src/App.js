import React, { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom'
import cn from 'classnames'

import { Navbar, Capacity, Schedule, Management, Communication } from 'components'

import CapacityIcon from 'assets/images/icons/capacity.svg'
import ScheduleIcon from 'assets/images/icons/schedule.svg'
import ManagementIcon from 'assets/images/icons/management.svg'
import CommunicationIcon from 'assets/images/icons/communication.svg'
import Shape2 from 'assets/images/shape2.svg'
import DotRounded from 'assets/images/dotRounded.svg'

const navbarItems = [
  { id: 1, text: 'Capacity planning', icon: CapacityIcon, func: 'setOpenCapacity' },
  { id: 2, text: 'Staggered schedules', icon: ScheduleIcon, path: '/schedule' },
  { id: 3, text: 'PPE management', icon: ManagementIcon, path: '/management' },
  { id: 4, text: 'Employee communication', icon: CommunicationIcon, path: '/communication' }
]

function App() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    let i = setInterval(() => {
      currentSlide < 4 && setCurrentSlide(currentSlide => currentSlide + 1);
      currentSlide === 3 && setCurrentSlide(0)
    }, 5000);
    return () => clearInterval(i)
  }, [currentSlide]);

  return (
    <div className="main__wrapper">
      <div className='navbar__wrapper'>
        <div className='navbar'>
          {navbarItems.map((value, index) => <div className={cn('navbar__item', { navbar__item__active: index === currentSlide })}>
            <div className='navbar__item__text'>{value.text}</div>
            <div className='navbar__icon__wrapper navbar__icon__wrapper__spin'>
              <img className='navbar__icon' src={value.icon} alt={`icon for ${value.text}`} />
            </div>
          </div>)}
        </div>
      </div>
      <div style={{ position: 'relative' }}>
        <div className='slider__wrapper'>
          <Capacity currentSlide={currentSlide} />
          <Schedule currentSlide={currentSlide} />
          <Management currentSlide={currentSlide} />
          <Communication currentSlide={currentSlide} />
        </div>
        <img className='shape2' src={Shape2} />
        <img className={cn({ 'dot-rounded__1': currentSlide === 0 || currentSlide === 2, 'dot-rounded__2': currentSlide === 1 || currentSlide === 3 })} src={DotRounded} />
      </div>
    </div>
  );
}

export default App;