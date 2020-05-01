import axios from 'axios';

export const getChallengeInfos = async (id) => {
  console.log(id);
  return (await axios.get(`https://baslessteaks.org/api/challenge/${id}`)).data;
};

export const confirmChallenge = async (id) => {
  await axios.put(`https://baslessteaks.org/api/challenge/${id}/accept`);
};

export const validateChallenge = async ({ id, validate_id, validate }) => {
  return (
    await axios.put(`https://baslessteaks.org/api/challenge/${id}/validate`, {
      validate_id,
      validate: validate === 'true',
    })
  ).data;
};
