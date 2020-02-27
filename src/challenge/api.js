import axios from 'axios';

export const startChallenge = async data => {
  console.log(data);
  return (await axios.post('/challenge', { data })).data;
};
