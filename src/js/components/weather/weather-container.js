import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Location from './location.js';
import Description from './description.js';
import Image from './image.js';
import WeatherNumber from './number.js';
import Panel from './panel.js';


class WeatherContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const { browser }             = this.props;
    const { city }                = this.props.weather;
    const { country }             = this.props.weather;
    const { weather_description } = this.props.weather;
    const { weather_image }       = this.props.weather;
    const { weather_number }      = this.props.weather;
    const { humidity }            = this.props.weather;
    const { precipitation }       = this.props.weather;
    const { wind_dir }            = this.props.weather;
    const { wind_speed }          = this.props.weather;

    const alertStyle = {
      marginTop: '50px',
      textAlign: 'center'
    }

    let display;

    if (city !== 'not found') {
      display = (
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
          <div className="row">
            <div className="col-md-3 col-xs-6">
              <Panel title="Humidity" color="panel panel-success" content={humidity} />
            </div>
            <div className="col-md-3 col-xs-6">
              <Panel title="Precipitation" color="panel panel-info" content={precipitation + ' (in.)'} />
            </div>
            <div className="col-md-3 col-xs-6">
              <Panel title="Wind Direction" color="panel panel-warning" content={wind_dir} />
            </div>
            <div className="col-md-3 col-xs-6">
              <Panel title="Wind Speed" color="panel panel-danger" content={wind_speed + ' km/h'} />
            </div>                                        
          </div>
        </div>
      )
    } else {
      display = (
        <div className="alert alert-danger" role="alert" style={alertStyle}>
          <strong>Location Not Found, Please Try Again!</strong>
        </div>
      )
    }

    return (
      <div>
        {display}
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    weather: state.weather,
    browser: state.browser
  };
}

export default connect(mapStateToProps)(WeatherContainer);