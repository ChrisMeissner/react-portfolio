import React from 'react';

function Nav() {

  return (
    <header>
      <nav>
        <ul>
          <li>
            <a href="#about">
              <h2>About Me</h2>
            </a>
          </li>
          <li>
            <a href="#portfolio">
              <h2>Portfolio</h2>
            </a>
          </li>
          <li>
            <a href="#contact">
              <h2>Contact</h2>
            </a>
          </li>
          <li>
            <a href="#resume">
              <h2>Resume</h2>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Nav;