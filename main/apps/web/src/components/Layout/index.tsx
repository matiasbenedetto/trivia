import React from 'react';

import UserStateBar from '../UserStateBar';
import AtributionBar from '../AtributionBar';

import './layout.scss';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({children}: LayoutProps) {
  return(
    <div className='main-layout'>
      <header>
        <UserStateBar />
      </header>
      <main>
        <div className="wrapper">{children}</div>
      </main>
      <footer>
        <AtributionBar />
      </footer>
    </div>
  )
}

export default Layout;
