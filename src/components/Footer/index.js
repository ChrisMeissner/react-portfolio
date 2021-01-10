import React from 'react';
import githubIcon from '../../assets/pics/githubIcon.png';
import instagramIcon from '../../assets/pics/instagramIcon.png';
import linkedInIcon from '../../assets/pics/linkedInIcon.png'

function Footer() {

  const divStyle = {
    'display': 'flex',
    'flex-direction': 'row',
    'width': '25%',
    'justify-content': 'space-around',
    'align-content': 'center'
  };

  const iconStyle = {
    'width': '100%'
  }

  return (
    <div style={divStyle}>
      <a href="https://github.com/ChrisMeissner">
        <img src={githubIcon} alt="github-icon" style={iconStyle}/>
      </a>
      <a href="https://www.linkedin.com/in/chris-meissner-a8a331149/">
        <img src={linkedInIcon} alt="linkedIn-icon" style={iconStyle}/>
      </a>
      <a href="https://www.instagram.com/chris_meissner/?hl=en">
        <img src={instagramIcon} alt="instagram-icon" style={iconStyle}/>
      </a>
    </div>
  )
}

export default Footer;