import React from 'react';
import { ConnectedUserInput, UserInputProps } from 'trivia-main';

import "./userInput.scss";

function UserInput({username, setUsername} :UserInputProps) {
  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  }

  return(
    <form className="user-input">
      <input
        value={username}
        placeholder="Username..."
        onChange={handleUsernameChange}
      />
    </form>
  )
}

export default ConnectedUserInput(UserInput);
