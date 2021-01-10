import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Footer from './components/Footer';

const overallStyling = {
  fontFamily: 'obstacle'
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
      </main>

      <Footer/>
    </div>
  )
};

export default App;
