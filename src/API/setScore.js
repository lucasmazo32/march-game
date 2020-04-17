import { getUsername, levelFormat } from './helperFunctions';

const appendScore = async (score, level) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  const urlencoded = new URLSearchParams();
  urlencoded.append('user', levelFormat(level, getUsername()));
  urlencoded.append('score', `${score}`);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow',
  };

  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IPX51VpIfsJ36tZFSzmK/scores/', requestOptions);
  const data = await response.json();
  return data;
};

export default appendScore;