const container = document.querySelector('.container');
const leaderBoardUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/';

let sliceId = '';

container.innerHTML = '';
const displayData = async () => {
  if (sliceId !== []) {
    sliceId = localStorage.getItem('generatedId').slice(14, 34);
    const response = await fetch(`${leaderBoardUrl}games/${sliceId}/scores/`);
    const data = await response.json();
    for (let i = 0; i < data.result.length; i += 1) {
      container.innerHTML += `
        <li class='${data.result[i] % 2 ? 'odd' : 'even'}'>${data.result[i].user} : ${data.result[i].score}</li>
        </ul>
        `;
    }
  }
};

export default displayData;
