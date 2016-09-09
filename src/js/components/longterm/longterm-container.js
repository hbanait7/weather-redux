import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import Day from './day.js';

class LongTermContainer extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {

    const style = {
      header: {
        textAlign: 'center',
        fontSize: '30px',
        margin: '50px 0px'
      },
      rowMargin: {
        textDecoration: 'underline'
      }
    };

    const forecast = this.props.longterm.longterm.forecastday || [];

    return (
      <div style={style.rowMargin} className="row">
        <div style={style.header}>Longterm Forecast</div>
        {
          forecast.slice(0, 6).map((item, index) => (
            <Day key={index} data={item} />
          ))
        }
      </div>
    );
  }
}

LongTermContainer.propTypes = {

};

function mapStateToProps(state) {
  return {
    longterm: state.longterm
  };
}

export default connect(mapStateToProps)(LongTermContainer);