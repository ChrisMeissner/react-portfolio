import React from 'react';

const navContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  width: '60%',
  height: 'inherit'
};

const navAnchorStyle = {
  fontSize: '40px',
  color: 'white',
  textDecoration: 'none',
  justifyContent: 'center',
  padding: '0% 2.5%'
}

function Nav() {
  return (
      <header style={navContainerStyle}>
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
      </header>
  );
};

export default Nav;