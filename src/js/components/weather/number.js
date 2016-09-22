import React, { PropTypes } from 'react';

const WeatherNumber = ({weather_number, browser}) => {

  const commonStyle = {
    textAlign: 'center'
  };

  const numberStyle = {
    regular: {
      ...commonStyle,
      fontSize: '100px'
    },
    extraSmall: {
      ...commonStyle,
      fontSize: '50px'
    }
  };

  return (
    <p 
      style={browser.mediaType === "extraSmall"
      ? numberStyle.extraSmall
      : numberStyle.regular}
    >
    {weather_number}&#8451;
    </p>
  );
}

export default WeatherNumber;