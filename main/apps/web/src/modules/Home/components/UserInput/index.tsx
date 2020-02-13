import React from 'react';
import { ConnectedUserInput, UserInputProps } from 'trivia-main';

function UserInput({username, setUsername} :UserInputProps) {
  const handleUsernameChange = (event: any) => {
    setUsername(event.target.value);
  }

  return(
    <form>
      <input
        value={username}
        placeholder="Username..."
        onChange={handleUsernameChange}
      />
    </form>
  )
}

export default ConnectedUserInput(UserInput);
