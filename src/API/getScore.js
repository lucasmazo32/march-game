import { sortArray } from './helperFunctions';

const getScore = async (levelNumber) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/IPX51VpIfsJ36tZFSzmK/scores/', { method: 'GET' });
  const data = await response.json();
  return sortArray(data, levelNumber);
};

export default getScore;