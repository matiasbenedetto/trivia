import React from 'react';
import Emoji from '../../components/Emoji';

import './atributionBar.scss';


function AtributionBar () {
  return (
    <div className="atribution-bar">
      <p><Emoji char="🎉" label="year" />2020</p>
      <p><Emoji char="💻" label="engineering"/> Developed by <strong>Matias Benedetto</strong></p>
    </div>
  )
}

export default AtributionBar;