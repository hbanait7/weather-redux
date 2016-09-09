import React from 'react';
import Header from './components/header/header-container.js';
import Search from './components/search/search-container.js';
import Weather from './components/weather/weather-container.js';
import Longterm from './components/longterm/longterm-container.js';
import Radar from './components/radar/radar-container.js';

const App = () => {
    return (
      <div className="container">
        <Header />
        <Search />
        <Weather />
        <Longterm />
        <Radar />
      </div> 
    );
};

export default App;