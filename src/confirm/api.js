import axios from 'axios';

export const getChallengeInfos = async id => {
  console.log(id);
  return (await axios.get(`/challenge/${id}`)).data;
};

// put /challenge/id/accept
