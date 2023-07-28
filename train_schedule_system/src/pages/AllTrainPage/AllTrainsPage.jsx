import React, { useEffect, useState } from 'react';
import TrainCard from '../../components/TrainCard';
import ApiService from '../../services/api';

const AllTrainsPage = () => {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    
    ApiService.getAllTrains()
      .then((data) => {
        
        const filteredTrains = data.filter(
          (train) => isTrainDepartingInNext30Minutes(train.departureTime) === false
        );

        const sortedTrains = filteredTrains.sort((a, b) => {
         
          if (a.prices.sleeper < b.prices.sleeper) return -1;
          if (a.prices.sleeper > b.prices.sleeper) return 1;
        
          if (a.tickets > b.tickets) return -1;
          if (a.tickets < b.tickets) return 1;
        
          const aDepartureTime = calculateDepartureTimeWithDelay(a);
          const bDepartureTime = calculateDepartureTimeWithDelay(b);
          return bDepartureTime - aDepartureTime;
        });

        setTrains(sortedTrains);
      })
      .catch((error) => {
      
        console.error('Error fetching trains:', error);
      });
  }, []);

  const isTrainDepartingInNext30Minutes = (departureTime) => {
    const now = new Date();
    const departure = new Date(departureTime);
    const minutesDifference = (departure - now) / 60000; 
    return minutesDifference <= 30;
  };

  const calculateDepartureTimeWithDelay = (train) => {
    const departure = new Date(train.departureTime);
    const delayMinutes = train.delays ? train.delays : 0;
    return departure.getTime() + delayMinutes * 60000; 
  };

  return (
    <div className="all-trains-page">
      {trains.map((train) => (
        <TrainCard key={train.id} train={train} />
      ))}
    </div>
  );
};

export default AllTrainsPage;
