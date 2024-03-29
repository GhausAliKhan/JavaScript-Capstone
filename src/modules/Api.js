import { getLikeCount, handleLike } from './Likes.js';
import countItems from './itemsCounter.js';

const container = document.getElementById('cardContainer');
const createCard = (json) => {
  // Created a Div with class card
  const card = document.createElement('div');
  card.className = 'card';

  // Created a h3 with the name of the show
  const title = document.createElement('h3');
  title.textContent = json.name;

  // Created a Div with class img-container
  const imgContainer = document.createElement('div');
  imgContainer.className = 'img-container';
  // Add Image
  const myImg = document.createElement('img');
  myImg.src = json.image.original;

  // Add Like & Comment button
  const likeBtn = document.createElement('button');
  likeBtn.className = 'like-btn';
  likeBtn.innerHTML = '<i class="far fa-heart"></i>';
  likeBtn.id = json.id;

  const likeCount = document.createElement('span');
  likeCount.className = 'like-count';
  likeCount.id = json.id;

  const commentBtn = document.createElement('button');
  commentBtn.className = 'comment-btn';
  commentBtn.textContent = 'Comment';
  commentBtn.id = `commentBtn${json.id}`;

  // Append childs to the card
  imgContainer.appendChild(myImg);
  card.appendChild(title);
  card.appendChild(imgContainer);
  card.appendChild(likeBtn);
  card.appendChild(likeCount);
  card.appendChild(commentBtn);
  container.appendChild(card);

  likeBtn.addEventListener('click', () => {
    handleLike(json.id);
  });

  // Call the function to retrieve and update the like count
  getLikeCount(json.id);
  countItems();
};
// eslint-disable-next-line import/no-mutable-exports
let arr = [];
const fetchApi = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const json = await response.json();
  if (json) {
    const slicedJson = json.slice(0, 15);
    arr = slicedJson;
    slicedJson.forEach((element) => {
      createCard(element);
    });
  }
};
export { fetchApi, arr };
