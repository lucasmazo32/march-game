const appendScore = async (score) => {
  const myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/x-www-form-urlencoded');

  const username = localStorage.getItem('Name');

  const urlencoded = new URLSearchParams();
  urlencoded.append('user', username);
  urlencoded.append('score', `${score}`);

  const requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: urlencoded,
    redirect: 'follow',
  };

  const response = await fetch('https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/laUrAQpoNlxdvXLIuXva/scores/', requestOptions);
  const data = await response.json();
  return data;
};

export default appendScore;