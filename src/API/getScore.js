const getScore = async (levelNumber) => {
  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/laUrAQpoNlxdvXLIuXva/scores/', { method: 'GET' });
  const data = await response.json();
  const regex = `Level-${levelNumber}`;
  let usersArray = [];
  data.result.forEach((userNScore) => {
    const level = userNScore.user.search(regex);
    if (level !== -1) {
      const username = userNScore.user.slice(regex.length + 1);
      usersArray.push({ user: username, score: userNScore.score });
    }
  });
  if (usersArray.length !== 0) {
    usersArray.sort((a, b) => b.score - a.score);
  }
  if (usersArray.length > 10) {
    usersArray = usersArray.slice(0, 10);
  }
  return usersArray;
};

export default getScore;