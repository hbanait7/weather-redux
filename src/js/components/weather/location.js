import React, { PropTypes } from 'react';

const Location = ({city, country, browser}) => {

  const commonStyle = {
    textAlign: 'center'
  };

  const locationStyle = {
    regular: {
      ...commonStyle,
      fontSize: '60px'
    },
    extraSmall: {
      ...commonStyle,
      marginTop: '20px',
      fontSize: '25px'
    }
  };

  return (
    <p style={browser.mediaType === "extraSmall"
      ? locationStyle.extraSmall 
      : locationStyle.regular}
    >
    {city}{country}
    </p>
  );
}

Location.propTypes = {
  city: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired
};

export default Location;