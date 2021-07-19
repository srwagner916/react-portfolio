import React from 'react';
import Nav from '../Nav';

function Header(props) {
  const {
    tabs = [],
    setCurrentTab,
    currentTab
  } = props;

  return (
    <header className="flex xl:flex-row md:flex-col xs:flex-col sm:flex-col font-serif h-60 flex justify-evenly items-center bg-hero-image" >
      <a href="/">
        <h1 className="xs:text-5xl md:text-8xl text-8xl text-gray-800 inline-block">Shay Wagner</h1>
      </a>
      <Nav tabs={tabs} setCurrentTab={setCurrentTab} currentTab={currentTab}/>
    </header>
  )
}

export default Header;