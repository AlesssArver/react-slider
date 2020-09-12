import React, { useState } from "react";
import cn from "classnames";

import "./index.sass";

import { Panel, Card, Button } from "components";

const masks = [
    {id: 1, avatar: null, name: 'Aden', surname: 'Walker', count: 3, created_at: '5/2/20 - 10:15AM'},
    {id: 2, avatar: null, name: 'Bree', surname: 'Kelly', count: 0, created_at: '5/2/20 - 10:03AM'},
    {id: 3, avatar: null, name: 'Aden', surname: 'Walker', count: 2, created_at: '5/2/20 - 9:47AM'},
]

const Management = ({ currentSlide }) => {
  const [selectMask, setSelectMask] = useState(null);

  const onSelectMask = (index) => setSelectMask(index);

  return (
<div className={cn('content__wrapper', currentSlide === 2 && 'content__wrapper__active')}>
      <div className="content">
        <div className="content__title">PPE management</div>
        <div className="content__description">
        Keep track of all your critical PPE inventory. Prioritize and track PPE allocation to highest at-risk employees.
        </div>
        <Card title="Masks">
            <div className="card__list">
                {masks.map((value, index) => <div className='field'>
                  <Panel className={cn('mask', selectMask === index && 'mask__active')} onClick={() => onSelectMask(index)} key={value.id}>
                    <div className='mask__name'>
                      {value.avatar ? <img className='mask__icon' src={value.avatar} alt={`avatar ${value.name} ${value.surname}`} /> : <div className='mask__icon no--avatar' />}
                        {value.name} {value.surname}
                    </div>
                    {value.count}
                    <div className='mask__date'>{value.created_at}</div>
                </Panel>
                </div>)}
            </div>
            <Button rounded>Done</Button>
        </Card>
      </div>
    </div>
  );
};

export default Management;
