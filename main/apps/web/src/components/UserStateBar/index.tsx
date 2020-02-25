import React from 'react';
import { ConnectedUserBar, UserBarProps } from 'trivia-main';
import Emoji from '../../components/Emoji';

import './userStateBar.scss';

function UserStateBar({username, score}: UserBarProps) {
  return(
    <div className="user-state-bar">
      <div>
      <Emoji char="👤" label="user" /> User: <strong>{username || 'Anonymous user'}</strong>
      </div>
      <div>
      <Emoji char="🔺" label="points" /> Score: <strong>{score}</strong>
      </div>
    </div>
  )
}

export default ConnectedUserBar(UserStateBar);
