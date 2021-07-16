import React from 'react';
import Nav from '../Nav';

function Header() {
  return (
    <header className="h-60 flex justify-evenly items-center bg-hero-image" >
      <h1 className="text-7xl inline-block">Shay Wagner</h1>
      <Nav />
    </header>
  )
}

export default Header;