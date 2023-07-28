import React from 'react';

const TrainCard = ({ train }) => {
 
  const { name, departureTime, seatAvailability, prices } = train;

  return (
    <div className="train-card">
      <h3>{name}</h3>
      <p>Departure Time: {departureTime}</p>
      <p>Seat Availability: {seatAvailability}</p>
      <p>Sleeper Price: {prices.sleeper}</p>
      <p>AC Price: {prices.ac}</p>
    </div>
  );
};

export default TrainCard;
