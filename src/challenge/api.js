import axios from 'axios';

export const startChallenge = async data => {
  console.log(data);
  return (
    await axios.post('https://baslessteaks.org/api/challenge', {
      challenged: {
        name: 'bob',
        email: 'bob@gmail.com',
        phone: '+33678899766',
      },
      supporters: [{ name: 'bob', email: 'bob@gmail.com' }],
      challenger: { name: 'bob', email: 'bob@gmail.com' },
      coach: 'JCVD',
      duration: 3,
      reward: 'BEER',
    })
  ).data;
};
