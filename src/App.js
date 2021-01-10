import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Footer from './components/Footer';

function App() {

  const overallStyling = {
    'font-family': 'obstacle'
  }

  const headerContainerStyling = {
    'display': 'flex',
    'flex-direction': 'row',
    'justify-content': 'space-between',
    'align-items': 'center',
    'width': '100%'  
  }

  return (
    <div style={overallStyling}>
      <div style={headerContainerStyling}>
        <Header></Header> 
        <Nav></Nav>
      </div>

      <main>
          
      </main>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
}

export default App;
