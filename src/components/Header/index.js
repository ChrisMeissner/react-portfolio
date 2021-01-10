import React from 'react';

function Header() {

  const headerStyle = {
    'font-size': '40px',
    'justify-content': 'center',
    'display': "flex",
    'width': '25%'
  }

  return (
    <header style={headerStyle}>
      <p>Chris Meissner</p>
    </header>
  );
}

export default Header;