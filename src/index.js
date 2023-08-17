import './style.css';
import icon from './assets/pageIcon.png';
import { fetchApi } from './modules/Api.js';

const headerIcon = document.querySelector('#pageIcon');
headerIcon.src = icon;
headerIcon.classList.add('icon');

window.onload = fetchApi();
