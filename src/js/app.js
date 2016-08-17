import React, { Component } from 'react'
import HeaderContainer from './components/header/header-container.js'
import WeatherContainer from './components/weather/weather-container.js'

class App extends Component {
  render() {
    return (
      <div className='container'>
        <HeaderContainer />
        <WeatherContainer />
      </div> 
    )
  }
}

export default App