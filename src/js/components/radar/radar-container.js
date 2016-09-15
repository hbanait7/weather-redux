import React, { Component, Proptypes } from 'react';
import { connect } from 'react-redux';

class RadarContainer extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const commonStyle = {
        border: '1px solid black'
    };

    const imgStyle = {
      regular: {
        ...commonStyle,
        width: '70%',
        margin: '50px 15%'
      },
      extraSmall: {
        ...commonStyle,
        margin: '20px 0px',
        width: '100%',
      }
    };

    const { city } = this.props.weather;

    let display;

    if (city !== 'not found') {
      display = (
        <div>
          <img 
            src={this.props.radar.radarUrl} 
            style={this.props.browser.mediaType === ("extraSmall")
              ? imgStyle.extraSmall
              : imgStyle.regular}
          />
        </div>
      )
    } else {
      display = (
        <span></span>
      )
    }

    return (
      <div>
        {display}
      </div>
    );
  }

}

RadarContainer.propTypes = {

};

function mapStateToProps(state) {
  return {
    radar: state.radar,
    browser: state.browser,
    weather: state.weather
  };
}

export default connect(mapStateToProps)(RadarContainer);
