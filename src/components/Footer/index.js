import React from 'react';
import githubIcon from '../../assets/pics/githubIcon.png';
import instagramIcon from '../../assets/pics/instagramIcon.png';
import linkedInIcon from '../../assets/pics/linkedInIcon.png'

const footerContainerStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '30%',
  margin: 'auto',
  backgroundColor: '#ff295b',
  borderRadius: '15px'
};

const anchorStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
  margin: '2.5%',
};

const iconStyle = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: 'inherit'
};

function Footer() {
  return(
    <section style={footerContainerStyle}>
      <a href="https://github.com/ChrisMeissner" style={anchorStyle}>
        <img src={githubIcon} alt="github-icon" style={iconStyle}/>
      </a>
      <a href="https://www.linkedin.com/in/chris-meissner-a8a331149/" style={anchorStyle}>
        <img src={linkedInIcon} alt="linkedIn-icon" style={iconStyle}/>
      </a>
      <a href="https://www.instagram.com/chris_meissner/?hl=en" style={anchorStyle}>
        <img src={instagramIcon} alt="instagram-icon" style={iconStyle}/>
      </a>
    </section>
  )
};

export default Footer;