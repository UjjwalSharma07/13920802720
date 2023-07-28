import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ApiService from '../../services/api';
import TrainDetail from '../../components/TrainDetail';


const SingleTrainPage = () => {
  const { trainId } = useParams();
  const [train, setTrain] = useState(null);

  useEffect(() => {
   
    ApiService.getTrainById(trainId)
      .then((data) => {
        setTrain(data);
      })
      .catch((error) => {
        console.log(error)
      });
  }, [trainId]);

  return (
    <div className="single-train-page">
      {train ? <TrainDetail train={train} /> : <p>Loading...</p>}
    </div>
  );
};

export default SingleTrainPage;
