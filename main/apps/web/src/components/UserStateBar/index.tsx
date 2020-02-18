import React from 'react';
import { ConnectedUserBar, UserBarProps } from 'trivia-main';

import './userStateBar.scss';

function UserStateBar({username, score}: UserBarProps) {
  return(
    <div className="user-state-bar">
      <div>
        User: <strong>{username}</strong>
      </div>
      <div>
        Score: <strong>{score}</strong>
      </div>
    </div>
  )
}

export default ConnectedUserBar(UserStateBar);
