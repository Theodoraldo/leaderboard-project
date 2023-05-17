import './style.css';
import newCreatedGame from './module/generateId.js';
import saveScore from './module/saveToDb.js';
import displayData from './module/fetchData.js';

const submit = document.getElementById('submit');
submit.addEventListener('click', (e) => {
  e.preventDefault();
  saveScore();
});

const refresh = document.getElementById('refresh');
refresh.addEventListener('click', () => {
  displayData();
});

newCreatedGame();
window.onload = displayData();
