import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Contact from './components/Contact'
import Footer from './components/Footer';
import pinkZebra from '../src/assets/pics/pinkZebra.png';

const overallStyling = {
  fontFamily: 'obstacle',
  backgroundImage: `url(${pinkZebra})`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover' 
};

const headerContainerStyling = {
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'stretch',
  width: '100%'
};

function App() {
  return(
    <div style={overallStyling}>
      <div style={headerContainerStyling}>
        <Header/> 
        <Nav/>
      </div>

      <main>
        <About/>
        <Contact/>
      </main>

      <Footer/>
    </div>
  )
};

export default App;
