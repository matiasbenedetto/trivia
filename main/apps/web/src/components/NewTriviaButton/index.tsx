import React from 'react';
import { ConnectedNewTriviaButton, NewTriviaButtonProps, constants } from 'trivia-main';

function NewTriviaButton({ settings, text, loading, triviaFetchRequested } :NewTriviaButtonProps) {
  const handleClick = () => {
    triviaFetchRequested(settings || constants.TRIVIA_DEFAULT_SETTINGS);
  }

  return(
    <button onClick={handleClick}>{loading ? 'Loading ...' : text}</button>
  )
}

export default ConnectedNewTriviaButton(NewTriviaButton);
