import React, { useState, useEffect } from 'react';
import { Route, NavLink } from 'react-router-dom'

import { Navbar, Capacity, Schedule, Management, Communication } from 'components'

import CapacityIcon from 'assets/images/icons/capacity.svg'
import ScheduleIcon from 'assets/images/icons/schedule.svg'
import ManagementIcon from 'assets/images/icons/management.svg'
import CommunicationIcon from 'assets/images/icons/communication.svg'

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
          {navbarItems.map(n => <div className='navbar__item'>
            <div className='navbar__item__text'>{n.text}</div>
            <div className='navbar__icon'>
              <img src={n.icon} alt={`icon for ${n.text}`} />
            </div>
          </div>)}
        </div>
      </div>
      {currentSlide === 0 && <Capacity currentSlide={currentSlide} />}
      {currentSlide === 1 && <Schedule currentSlide={currentSlide} />}
      {currentSlide === 2 && <Management currentSlide={currentSlide} />}
      {currentSlide === 3 && <Communication currentSlide={currentSlide} />}
      {/* <Route path='/capacity' render={() => <Capacity />} /> */}
      {/* <Route path='/schedule' render={() => <Schedule />} /> */}
      {/* <Route path='/management' render={() => <Management />} />
      <Route path='/communication' render={() => <Communication />} /> */}
    </div>
  );
}

export default App;
