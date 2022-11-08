import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { index, planetName, planetImage } = this.props;
    return (
      <div className={ index } data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        <a href={ `https://pt.wikipedia.org/wiki/${planetName}` }>
          <img
            className="imgPlanets"
            src={ planetImage }
            alt={ `Planeta ${planetName}` }
          />
        </a>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  index: PropTypes.string.isRequired,
  planetName: PropTypes.string.isRequired,
  planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
