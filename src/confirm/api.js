import axios from 'axios';

export const getChallengeInfos = async id => {
  console.log(id);
  return (await axios.get(`/api/challenge/${id}`)).data.id;
};

export const confirmChallenge = async id => {
  await axios.put(`/api/challenge/${id}/accept`);
};

// status : accepted / pending / canceled
//created_at : date

// + page de validation
export const validateChallenge = async (id, validate_id, validate) => {
  await axios.put(`/api/challenge/${id}/validate`, { validate_id, validate });
};
// validate_id : dans url
// validate : true / false
