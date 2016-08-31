import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Location from './location.js';
import Description from './description.js';
import Image from './image.js';
import WeatherNumber from './number.js';


class WeatherContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { browser } = this.props;
    const { city } = this.props.weather;
    const { country } = this.props.weather;
    const { weather_description } = this.props.weather;
    const { weather_image } = this.props.weather;
    const { weather_number } = this.props.weather;

    return (
      <div>
        
        <div className="row">
          <Location 
            city={city} 
            country={country} 
            browser={browser} 
          />
        </div>

        <div className="row">
          <Description 
            description={weather_description} 
            browser={browser} 
          />
        </div>

        <div className="row">
          <Image 
            image={weather_image} 
            browser={browser} 
          />
          <WeatherNumber
            weather_number={weather_number}
            browser={browser}
          />
        </div>

      </div>
    );
  }
}

WeatherContainer.propTypes = {
  weather: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    weather: state.weather,
    browser: state.browser
  };
}

export default connect(mapStateToProps)(WeatherContainer);