import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
      </div>
    // <p>Sistema Solar</p>
    );
  }
}

export default App;
