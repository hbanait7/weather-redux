import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Location from './location.js';


class WeatherContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    
    var border = {
      border: '1px solid black'
    };

    return (
      <div style={border}>
        <Location city={this.props.weather.city} country={this.props.weather.country} />
      </div>
    );
  }
}

WeatherContainer.propTypes = {
  weather: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
    weather: state.weather
  };
}

export default connect(mapStateToProps)(WeatherContainer);