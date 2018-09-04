import * as React from 'react';

import './Votes.css';

import { Votes as Props } from '../models/Votes';

import getVotes from '../utils/getVotes';

const Votes = (
  {
    count,
    name,
    onDecrement,
    onIncrement,
  }
  : Props
) =>
  <div className="vote">
    <div className="label">
      {`${name} ${getVotes(count)}`}
    </div>
    <div>
      <button onClick={onDecrement}>-</button>
      <button onClick={onIncrement}>+</button>
    </div>
  </div>

export default Votes;
