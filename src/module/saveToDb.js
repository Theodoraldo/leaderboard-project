const leaderBoardUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

let sliceId = '';
const userName = document.getElementById('user_name');
const userScore = document.getElementById('user_score');

if (sliceId !== []) {
  sliceId = localStorage.getItem('generatedId').slice(14, 34);
}

const saveScore = async () => {
  await fetch(`${leaderBoardUrl}games/${sliceId}/scores/`, {
    method: 'POST',
    body: JSON.stringify({
      user: userName.value,
      score: userScore.value,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  userName.value = '';
  userScore.value = '';
};

export default saveScore;
