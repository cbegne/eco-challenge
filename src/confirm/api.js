import axios from 'axios';

export const getChallengeInfos = async id => {
  console.log(id);
  return (await axios.get('/getInfos', { id })).data;
};
