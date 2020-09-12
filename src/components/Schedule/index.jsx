import React, { useState } from "react";
import cn from "classnames";

import "./index.sass";

import ClockIcon from "assets/images/icons/clock.svg";
import CheckIcon from "assets/images/icons/check.svg";

import { Panel, Card } from "components";
import { Select } from "components/Common/Forms";
import { Columns } from "components/Common/Grid/Column";

const sites = [
  { id: 1, text: "3762 Ray Court Street" },
  { id: 2, text: "8562 San Carlos Street" },
];
const selectItems = ["Monday", "Thuesday"];
const timeBlocks = [
    {id: 1, text: 'Monday', time: '12:00Am'},
    {id: 2, text: 'Thuesday', time: '10:00Am'}
]

const Capacity = ({ currentSlide }) => {
  const [selectSite, setSelectSite] = useState(null);
  const [selectTimeBlock, setSelectTimeBlock] = useState(null);

  const onSelectSite = (index) => setSelectSite(index);
  const onSelectTimeBlock = (index) => setSelectTimeBlock(index);

  return (
<div className={cn('content__wrapper', currentSlide === 1 && 'content__wrapper__active')}>
      <div className="content">
        <div className="content__title">Staggered schedules</div>
        <div className="content__description">
          Create multiple user groups and assign staggered schedules to users.
          Deny access outside of a set schedule. Change and update schedules
          easily that employees can check from the app.
        </div>
        <Card title="Set yor schedule">
          <div className="card__list__wrapper">
            <div className="card__list__title">sites</div>
            <Columns columns='2'>
              {sites.map((value, index) => (
                <Panel
                  onClick={() => onSelectSite(index)}
                  className={cn(
                    "sites__list",
                    selectSite === index && "sites__list__active"
                  )}
                >
                  {value.text}
                </Panel>
              ))}
            </Columns>
          </div>
          <div className="field">
            <Select items={selectItems} rounded />
          </div>
          <div className="card__list__wrapper">
            <div className="card__list__title">time blocks</div>
            <Columns columns='2'>
              {timeBlocks.map((value, index) => (
                <Panel
                  onClick={() => onSelectTimeBlock(index)}
                  className={cn(
                    "timeblock",
                    selectTimeBlock === index && "timeblock__active"
                  )}
                >
                  <img className='timeblock__icon' src={selectTimeBlock === index ? CheckIcon : ClockIcon} alt='clock icon' />
                  <div className='timeblock__content'>
                    {value.text}
                    <span className='timeblock__time'>{value.time}</span>
                  </div>
                </Panel>
              ))}
            </Columns>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Capacity;
