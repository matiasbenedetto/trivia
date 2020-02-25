import React from 'react';
import Emoji from '../../components/Emoji';

import './loading.scss';


interface LoadingProps {
  text?: string;
}

function Loading ({ text }: LoadingProps) {
  return (
    <div className="loading">
      <h1><Emoji char="🤔" label="thinking" /> <Emoji char="💭" label="trivia" /></h1>
      <h2>{text || 'Loading ...'}</h2>
    </div>
  )
}

export default Loading;
