import React from 'react';
import PropTypes from 'prop-types';

import style from './ticket-segment.module.scss';

function TicketSegment({ date, destination, duration, origin, stops }) {
  const hoursInFlight = Math.floor(duration / 60);
  const minutesInFlight = duration - hoursInFlight * 60;

  const originDate = new Date(date);
  const originHours = originDate.getUTCHours() < 10 ? `0${originDate.getUTCHours()}` : originDate.getUTCHours();
  const originMinutes = originDate.getUTCMinutes() < 10 ? `0${originDate.getUTCMinutes()}` : originDate.getUTCMinutes();

  const destinationDate = new Date(originDate.getUTCMilliseconds() + duration * 60000);
  const destinationHours =
    destinationDate.getUTCHours() < 10 ? `0${destinationDate.getUTCHours()}` : destinationDate.getUTCHours();
  const destinationMinutes =
    destinationDate.getUTCMinutes() < 10 ? `0${destinationDate.getUTCMinutes()}` : destinationDate.getUTCMinutes();

  const transfer = stops.length > 0 ? `${stops.length} пересадки` : 'Без пересадок';
  const transferPoint = stops.length > 0 ? <p className={style.text}>{stops.join(', ')}</p> : null;

  return (
    <>
      <li className={style.container}>
        <h3 className={style.heading}>{`${origin} - ${destination}`}</h3>
        <p className={style.text}>{`${originHours}:${originMinutes} - ${destinationHours}:${destinationMinutes}`}</p>
      </li>
      <li className={style.container}>
        <h3 className={style.heading}>В пути</h3>
        <p className={style.text}>{`${hoursInFlight}ч ${minutesInFlight}м`}</p>
      </li>
      <li className={style.container}>
        <h3 className={style.heading}>{transfer}</h3>
        {transferPoint}
      </li>
    </>
  );
}

TicketSegment.propTypes = {
  date: PropTypes.string.isRequired,
  destination: PropTypes.string.isRequired,
  duration: PropTypes.number.isRequired,
  origin: PropTypes.string.isRequired,
  stops: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default TicketSegment;
