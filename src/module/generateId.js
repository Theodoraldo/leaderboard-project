const leaderBoardUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

let createId;
const newCreatedGame = async () => {
  if (localStorage.getItem('generatedId')) {
    createId = localStorage.getItem('generatedId');
  } else {
    const response = await fetch(`${leaderBoardUrl}games/`, {
      method: 'POST',
      body: JSON.stringify({ name: 'My2023Games' }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const gameID = await response.json();
    createId = gameID.result;
    localStorage.setItem('generatedId', createId);
  }
};

export default newCreatedGame;