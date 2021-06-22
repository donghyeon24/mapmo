const listBtn = document.querySelector('main .container .buttons .list-btn');
const searchBtn = document.querySelector(
  'main .container .buttons .search-btn'
);
const friendsList = document.querySelector(
  'main .container .content .friends-list'
);
const searchList = document.querySelector(
  'main .container .content .search-list'
);

listBtn.addEventListener('click', () => {
  listBtn.classList.add('clicked');
  searchBtn.classList.remove('clicked');
  friendsList.classList.remove('hidden');
  searchList.classList.add('hidden');
});

searchBtn.addEventListener('click', () => {
  listBtn.classList.remove('clicked');
  searchBtn.classList.add('clicked');
  friendsList.classList.add('hidden');
  searchList.classList.remove('hidden');
});
