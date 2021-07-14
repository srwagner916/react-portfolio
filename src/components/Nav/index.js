import React from 'react';
import './style.css';

function Nav() {
  return (
    <header className="flex-row center-vertical">
      <nav>
        <ul className="inline-block">
          <li className="mx">
            <h1>Shay Wagner</h1>
          </li>
          <li className="mx">
            <a href="/">
              <span>About Me</span>
            </a>
          </li>
          <li className="mx">
            <a href="/">
              <span>Portfolio</span>
            </a>
          </li>
          <li className="mx">
            <a href="/">
              <span>Contact Me</span>
            </a>
          </li>
          <li className="mx">
            <a href="/">
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav;