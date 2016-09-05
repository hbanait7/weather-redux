import React from 'react';
import HeaderContainer from './components/header/header-container.js';
import WeatherContainer from './components/weather/weather-container.js';
import LongtermContainer from './components/longterm/longterm-container.js';


const App = () => {
    return (
      <div className="container">
        <HeaderContainer />
        <WeatherContainer />
        <LongtermContainer />
      </div> 
    );
};

export default App;