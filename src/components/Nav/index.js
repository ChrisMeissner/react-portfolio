import React from 'react';

function Nav() {

  const navContainerStyle = {
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-evenly',
    'align-items': 'center',
    'width': '75%',
    'background-color': 'blue'
  };

  const navAnchorStyle = {
    'font-size': '40px',
    'color': 'white',
    'text-decoration': 'none',
    'justify-content': "center",
    'padding': '0% 2.5%'
  }

  return (
      <nav style={navContainerStyle}>
        <a href="#about" style={navAnchorStyle}>
          <p>About Me</p>
        </a>
        <a href="#portfolio" style={navAnchorStyle}>
          <p>Portfolio</p>
        </a>
        <a href="#contact" style={navAnchorStyle}>
          <p>Contact</p>
        </a>
        <a href="#resume" style={navAnchorStyle}>
          <p>Resume</p>
        </a>
      </nav>
  );
}

export default Nav;