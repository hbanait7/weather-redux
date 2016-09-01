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

// WeatherNumber.propTypes = {
  // Unable to resolve:
  
  // weather_number: PropTypes.number.isRequired
  // produces this error:
  // Failed prop type: Invalid prop `weather_number` of type `string` supplied to `WeatherNumber`, expected `number`.
  
  // But then switching type:
  // weather_number: PropTypes.string.isRequired
  // produces this error:
  // Failed prop type: Invalid prop `weather_number` of type `number` supplied to `WeatherNumber`, expected `string`.
// };

export default WeatherNumber;