import axios from 'axios';

export const getChallengeInfos = async (id) => {
  console.log(id);
  return (
    await axios.get(`${process.env.REACT_APP_API_BASE_URL}/challenge/${id}`)
  ).data;
};

export const confirmChallenge = async (id) => {
  await axios.put(
    `${process.env.REACT_APP_API_BASE_URL}/challenge/${id}/accept`,
  );
};

export const validateChallenge = async ({ id, validate_id, validate }) => {
  return (
    await axios.put(
      `${process.env.REACT_APP_API_BASE_URL}/challenge/${id}/validate`,
      {
        validate_id,
        validate: validate === 'true',
      },
    )
  ).data;
};
