import axios from 'axios';

export const getChallengeInfos = async id => {
  console.log(id);
  return (await axios.get(`/api/challenge/${id}`)).data;
};

export const confirmChallenge = async id => {
  await axios.put(`/api/challenge/${id}/accept`);
};

// status : accepted / pending / canceled
//created_at : date
