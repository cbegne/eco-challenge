import axios from 'axios';

export const startChallenge = async data => {
  console.log(data);
  return (await axios.post('https://baslessteaks.org/api/challenge', data))
    .data;
};
