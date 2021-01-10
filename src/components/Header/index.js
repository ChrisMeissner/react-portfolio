import React from 'react';

const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  width: '40%',
  height: '100%',
  fontSize: '60px',
  color: 'green'
};

function Header() {
  return (
    <section style={headerStyle}>
      Chris Meissner
    </section>
  )
};

export default Header;