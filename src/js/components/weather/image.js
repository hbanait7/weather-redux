import React, { PropTypes } from 'react';

const Image = ({image, browser}) => {

  const commonStyle = {
    display: 'block',
    margin: '0px auto'
  };

  const imageStyle = {
    regular: {
      ...commonStyle,
      width: '100px',
      height: '100px'
    },
    extraSmall: {
      ...commonStyle
    }
  };

  return (
    <span>
      <img 
        src={image}
        style={browser.mediaType === "extraSmall"
          ? imageStyle.extraSmall
          : imageStyle.regular}
      />
    </span>
  );
}

Image.propTypes = {
  image: PropTypes.string.isRequired
};

export default Image;