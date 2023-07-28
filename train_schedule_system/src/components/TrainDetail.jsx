import React from 'react';

const TrainDetail = ({ train }) => {
 
  const { name, departureTime, seatAvailability, prices } = train;

  return (
    <div className="train-details">
      <h2>{name}</h2>
      <p>Departure Time: {departureTime}</p>
      <p>Seat Availability: {seatAvailability}</p>
      <p>Sleeper Price: {prices.sleeper}</p>
      <p>AC Price: {prices.ac}</p>
      
    </div>
  );
};

export default TrainDetail;
