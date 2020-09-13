import React, { useState } from "react";
import cn from "classnames";

import "./index.sass";

import { Panel, Card, Button } from "components";

const masks = [
    {id: 1, avatar: null, name: 'Aden', surname: 'Walker', count: 3, created_at: '5/2/20 - 10:15AM'},
    {id: 2, avatar: null, name: 'Bree', surname: 'Kelly', count: 0, created_at: '5/2/20 - 10:03AM'},
    {id: 3, avatar: null, name: 'Aden', surname: 'Walker', count: 2, created_at: '5/2/20 - 9:47AM'},
]

const Event = () => {
  return (
    <Panel className="event">
        <div className="event__header">
          <div className="event__date">March 8, 2020</div>
          <div className="event__point"></div>
        </div>
        <div className="event__content">
          <div className="event__title">Prevent spread of COVID19</div>
        </div>
    </Panel>
  );
};

export default Event;
