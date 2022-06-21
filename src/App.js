import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './data/missions';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SolarSystem />
        <Missions />
      </div>
    );
  }
}

export default App;
