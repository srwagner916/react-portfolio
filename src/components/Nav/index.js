import React from 'react';

function Nav() {
  return (
      <nav className="inline-flex">
        <ul className="inline-block">
          <li className="inline mx-10 text-xl">
            <a href="/">
              <span>About Me</span>
            </a>
          </li>
          <li className="inline mx-10 text-xl">
            <a href="/">
              <span>Portfolio</span>
            </a>
          </li>
          <li className="inline mx-10 text-xl">
            <a href="/">
              <span>Contact Me</span>
            </a>
          </li>
          <li className="inline mx-10 text-xl">
            <a href="/">
              <span>Resume</span>
            </a>
          </li>
        </ul>
      </nav>
  )
}

export default Nav;