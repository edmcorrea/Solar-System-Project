import React from 'react';
import PlanetCard from './PlanetCard';
import Title from './Title';
import planets from '../data/planets';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <div className="planetsCards">
          {planets.map((element, index) => (
            <PlanetCard
              index={ `planeta${index}` }
              key={ element.name }
              planetName={ element.name }
              planetImage={ element.image }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default SolarSystem;
