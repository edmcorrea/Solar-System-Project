import React from 'react';
import PropTypes from 'prop-types';

class PlanetCard extends React.Component {
  render() {
    const { planetName } = this.props;
    return (
      <div data-testid="planet-card">
        <p data-testid="planet-name">{planetName}</p>
        {/* <img src={ planetImage } alt={ `Planeta ${planetName}` }></img> */}
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string.isRequired,
  // planetImage: PropTypes.string.isRequired,
};

export default PlanetCard;
