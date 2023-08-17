import './style.css';
import icon from './assets/pageIcon.png';
import { fetchApi } from './modules/Api.js';

const container = document.getElementById('cardContainer');
const headerIcon = document.querySelector('#pageIcon');
headerIcon.src = icon;
headerIcon.classList.add('icon');

container.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON' && e.target.textContent === 'Comment') {
    // displayMenu(e.target.id);
  }
});

window.onload = fetchApi();
