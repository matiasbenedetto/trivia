import React from 'react';
import { Link } from 'react-router-dom';
import { ConnectedHome, HomeProps } from 'trivia-main';
import UserInput from '../../components/UserInput';
import Emoji from '../../components/Emoji';

import './home.scss';


function Home({ user }: HomeProps) {
  return(
    <div className="home">
      <h1 className="emoji"><Emoji char='🤔' label="thinking"/></h1>
      <h1>Welcome {user.username} to the trivia challenge!</h1>
      <UserInput />

      <h3>Yo will be presented with 10 True of False questions.</h3>
      <h2>Can you score 100%?</h2>

      <Link to="/trivia/new">
        <button>Begin! <Emoji char="💪" label="challenge" /></button>
      </Link>
    </div>
  )
}

export default ConnectedHome(Home);
