const sortArray = (data, levelNumber) => {
  let usersArray = [];
  const regex = `Level-${levelNumber}`;
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

const getUsername = () => {
  const username = localStorage.getItem('Name');
  return username;
};

const levelFormat = (level, username) => {
  return `Level-${level}-${username}`;
};

export { sortArray, getUsername, levelFormat };