import React from 'react';
import profilePic from '../../assets/pics/profilePic.jpg';

const aboutTitleStyling = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '100%',
  margin: 'auto',
  padding: '5% 0%',
  fontSize: '60px',
  color: '#FFFFFF',
  backgroundColor: '#000000'
};

const aboutContentStyling = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  alignItems: 'stretch',
  width: '100%',
  height: '50%',
  margin: 'auto',
  color: '#FFFFFF',
};

const aboutPicStyling = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '30%',
  height: 'inherit',
  padding: '5% 2.5% 5% 5%'
};

const aboutTextStyling = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  width: '70%',
  height: 'inherit',
  padding: '5% 5% 5% 2.5%',
  fontSize: '155%'
};

function About() {
  return(
    <section id="about">
      <p style={aboutTitleStyling}>About Chris</p>
      <div style={aboutContentStyling}>
        <img src={profilePic} alt="profile-pic" style={aboutPicStyling}/>
        <p style={aboutTextStyling}>Born and raised in El Dorado Hills, California (but I tell people I am from Sacramento). I recieved my undergraduate degree from UCLA with a major in Theater and a specialization in Musical Theater. I have been so lucky to have performed in some really great projects (West Side Story: in Concert with the San Fransico Symphony (Baby John), DTLA's production of Carrie (Ensemble), Grease: Live! (Ensemble), and Frozen! (Olaf) to name a few). When I'm not singing or dancing, I like to stay creative with photography, video production, and graphic design. I am taking the Coding Bootcamp through UCLA because, one day, I would like to own my own business and be able to do everything in house, including full stack web development. I hope you enjoy my work! Let's connect!</p>
      </div>
    </section>
  )
};

export default About;