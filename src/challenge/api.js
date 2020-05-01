import axios from 'axios';

export const startChallenge = async (data) => {
  return (
    await axios.post(`${process.env.REACT_APP_API_BASE_URL}/challenge`, data)
  ).data;
};
