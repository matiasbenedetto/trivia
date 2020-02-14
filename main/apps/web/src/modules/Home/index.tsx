import React from 'react';

import { ConnectedHome, HomeProps } from 'trivia-main';
import UserInput from '../../components/UserInput';
import { Link } from 'react-router-dom';


function Home({ user }: HomeProps) {
  console.log(user);
  return(
    <div>
      <h1>Welcome {user.username} to the trivia challenge!</h1>
      <UserInput />

      <h2>Yo will be presented with 10 True of False questions.</h2>
      <h2>Can you score 100%?</h2>

      <Link to="/trivia/1">
        <button>Begin!</button>
      </Link>
    </div>
  )
}

export default ConnectedHome(Home);
