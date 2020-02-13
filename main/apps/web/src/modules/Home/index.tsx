import React from 'react';

import { ConnectedHome, HomeProps } from 'trivia-main';
import UserInput from './components/UserInput';


function Home({ user }: HomeProps) {
  console.log(user);
  return(
    <div>
      <h1>Welcome {user.username} to the trivia challenge!</h1>
      <UserInput />
    </div>
  )
}

export default ConnectedHome(Home);
