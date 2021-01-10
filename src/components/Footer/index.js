import React from 'react';
import githubIcon from '../../assets/pics/githubIcon.png';
import instagramIcon from '../../assets/pics/instagramIcon.png';
import linkedInIcon from '../../assets/pics/linkedInIcon.png'

function Footer() {

  const footerContainerStyle = {
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-between',
    'align-items': 'center',
    'width': '30%',
    'margin': 'auto'
  };

  const anchorStyle = {
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': "center",
    'width': '100%',
    'margin': '2.5%'
  }

  const iconStyle = {
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'center',
    'width': 'inherit'
  };

  return (
    <div style={footerContainerStyle}>
      <a href="https://github.com/ChrisMeissner" style={anchorStyle}>
        <img src={githubIcon} alt="github-icon" style={iconStyle}/>
      </a>
      <a href="https://www.linkedin.com/in/chris-meissner-a8a331149/" style={anchorStyle}>
        <img src={linkedInIcon} alt="linkedIn-icon" style={iconStyle}/>
      </a>
      <a href="https://www.instagram.com/chris_meissner/?hl=en" style={anchorStyle}>
        <img src={instagramIcon} alt="instagram-icon" style={iconStyle}/>
      </a>
    </div>
  )
}

export default Footer;