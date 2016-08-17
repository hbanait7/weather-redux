import React, { Component } from 'react'
import { connect } from 'react-redux';
import {
  weather
} from '../../actions/actions';

class WeatherContainer extends Component {
  componentWillMount() {
    this.props.weather();
  }

  render() {
    return (
      <div className='row'>
        hello from WeatherContainer
      </div>
    )
  }
}

// function mapStateToProps(state) { return {} }

export default connect(() => ({
}), {
  weather
})(WeatherContainer)