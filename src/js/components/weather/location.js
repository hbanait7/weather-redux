import React, { PropTypes } from 'react';

const Location = ({city, country}) => {

  var locationStyle = {
    
  };

  return (
    <p style={locationStyle}>{city}{country}</p>
  );
}

Location.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};

export default Location;