import React from 'react';

const headerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  width: '40%',
  height: 'inherit',
  fontSize: '60px',
  color: '#FFFFFF'
};

function Header() {
  return (
    <div style={headerStyle}>
      Chris Meissner
    </div>
  )
};

export default Header;