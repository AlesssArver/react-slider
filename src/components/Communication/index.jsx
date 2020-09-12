import React, { useState } from "react";
import cn from "classnames";

import "./index.sass";

import { Panel, Card, Button } from "components";

const masks = [
    {id: 1, avatar: null, name: 'Aden', surname: 'Walker', count: 3, created_at: '5/2/20 - 10:15AM'},
    {id: 2, avatar: null, name: 'Bree', surname: 'Kelly', count: 0, created_at: '5/2/20 - 10:03AM'},
    {id: 3, avatar: null, name: 'Aden', surname: 'Walker', count: 2, created_at: '5/2/20 - 9:47AM'},
]

const Communication = ({ currentSlide }) => {
  return (
<div className={cn('content__wrapper', currentSlide === 3 && 'content__wrapper__active')}>
      <div className="content">
        <div className="content__title">Employee communication</div>
        <div className="content__description">
        Send out timely announcements for COVID-19 health-related news and guidelines, directly in the app. Ensure employees update critical contacts in case
of emergency.
        </div>
        <Card title="Announcements">
            <Button backgroundColor='#0F0449' uppercase>begin health check</Button>
        </Card>
      </div>
    </div>
  );
};

export default Communication;
