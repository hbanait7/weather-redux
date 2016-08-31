import React, { PropTypes } from 'react';

const Description = ({description, browser}) => {

  const commonStyle = {
    textAlign: 'center'
  };

  const descriptionStyle = {
    regular: {
      ...commonStyle,      
      fontSize: '40px'
    },
    extraSmall: {
      ...commonStyle,      
      fontSize: '20px'
    }
  };

  return (
    <p style={browser.mediaType === "extraSmall"
      ? descriptionStyle.extraSmall
      : descriptionStyle.regular}
    >
    {description}
    </p>
  );
}

Description.propTypes = {
  description: PropTypes.string.isRequired
};

export default Description;