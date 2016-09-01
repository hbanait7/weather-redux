import React, { PropTypes } from 'react';

const Panel = ({color, content, browser, title}) => {

  const textStyle = {
    textAlign: 'center'
  };

  return (
    <div className={color}>
      <div className="panel-heading" style={textStyle}>
        {title}
      </div>
      <div className="panel-body" style={textStyle}>
        {content}
      </div>
    </div>
  );
}

Panel.propTypes = {

};

export default Panel;