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
        width: '100%',
      }
    };

    return (
      <div>
        <img 
          src={this.props.radar.radarUrl} 
          style={this.props.browser.mediaType === ("extraSmall")
            ? imgStyle.extraSmall
            : imgStyle.regular}
        />
      </div>
    );
  }

}

RadarContainer.propTypes = {

};

function mapStateToProps(state) {
  return {
    radar: state.radar,
    browser: state.browser
  };
}

export default connect(mapStateToProps)(RadarContainer);
