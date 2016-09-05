import React, { PropTypes } from 'react';

const Day = ({data}) => {

  const weekday = data.date.weekday_short;
  const month = data.date.monthname_short;
  const dayNum = data.date.day;
  const img = data.icon_url;
  const high = data.high.celsius;
  const low = data.low.celsius;
  const precipitation = data.pop

  const style = {
    textAlign: 'center'
  };

  return (
    <div style={style} className="col-xs-2">
      <p>{weekday}</p>
      <p>{month}</p>
      <p>{dayNum}</p>
      <img src={img} />
      <p>{`High: ${high}`}&#8451;</p>
      <p>{`Low: ${low}`}&#8451;</p>
      <p>{`P.O.P.: ${precipitation}%`}</p>
    </div>
  );
}

Day.propTypes = {
  data: PropTypes.object.isRequired
};

export default Day;

