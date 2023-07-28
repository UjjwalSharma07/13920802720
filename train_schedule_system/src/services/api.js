import axios from 'axios';


const API_BASE_URL = 'http://20.244.56.144:80/train/trains';

const ApiService = {
  getAllTrains: () => {
    return axios
      .get(API_BASE_URL)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },

  getTrainById: (trainId) => {
    const url = `${API_BASE_URL}/${trainId}`;
    return axios
      .get(url)
      .then((response) => response.data)
      .catch((error) => {
        throw error;
      });
  },
};

export default ApiService;
