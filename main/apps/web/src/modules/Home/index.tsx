import React from 'react';
import { Link } from 'react-router-dom';
import { ConnectedHome, HomeProps } from 'trivia-main';
import UserInput from '../../components/UserInput';

import './home.scss';


function Home({ user }: HomeProps) {
  return(
    <div className="home">
      <h1>Welcome {user.username} to the trivia challenge!</h1>
      <UserInput />

      <h2>Yo will be presented with 10 True of False questions.</h2>
      <h2>Can you score 100%?</h2>

      <Link to="/trivia/new">
        <button>Begin!</button>
      </Link>
    </div>
  )
}

export default ConnectedHome(Home);
