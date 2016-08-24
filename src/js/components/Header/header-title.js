import React from 'react';

const HeaderTitle = () => {

    const headerStyle = {
      fontSize: '50px', 
      textAlign: 'center'
    };

    const weatherWordStyle = {
      color: '#4092ed'
    };

    const appWordStyle = {
      color: '#2fc6d6'
    };

    return (
      <h1 style={headerStyle}>
        <span style={weatherWordStyle}>Weather</span>&nbsp;
        <span style={appWordStyle}>App</span>
      </h1>      
    );
};

export default HeaderTitle;