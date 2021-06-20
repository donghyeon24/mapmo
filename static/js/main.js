// account 버튼
const accountToggle = () => {
  document.querySelector('header .account-menu').classList.toggle('active');
};
// const accountClose = () => {
//   document.querySelector("header .account-btn").classList.remove("active");
// };

document
  .querySelector('header .account-btn')
  .addEventListener('click', accountToggle);

//
//
// write 버튼
const writeOpen = () => {
  document.querySelector('.modal').classList.remove('hidden');
};
const writeClose = () => {
  document.querySelector('.modal').classList.add('hidden');
};

document.querySelector('.write-btn').addEventListener('click', writeOpen);
document.querySelector('.background').addEventListener('click', writeClose);

//
//
// preview-list 내 to-prev-btn & to-post-btn
const preview0 = document.querySelector(
  '.modal .modal-box .preview-list ul .preview0'
);
const preview1 = document.querySelector(
  '.modal .modal-box .preview-list ul .preview1'
);
const preview2 = document.querySelector(
  '.modal .modal-box .preview-list ul .preview2'
);
const preview3 = document.querySelector(
  '.modal .modal-box .preview-list ul .preview3'
);
const previewCenter = document.querySelector(
  '.modal .modal-box .preview-list ul .preview-center'
);
const preview5 = document.querySelector(
  '.modal .modal-box .preview-list ul .preview5'
);
const preview6 = document.querySelector(
  '.modal .modal-box .preview-list ul .preview6'
);
const preview7 = document.querySelector(
  '.modal .modal-box .preview-list ul .preview7'
);
const preview8 = document.querySelector(
  '.modal .modal-box .preview-list ul .preview8'
);

const toPrev = () => {
  preview1.classList.remove('preview1');
  preview1.classList.add('hidden');

  preview2.classList.remove('preview2');
  preview2.classList.add('preview1');

  preview3.classList.remove('preview3');
  preview3.classList.add('preview2');

  previewCenter.classList.remove('preview-center');
  previewCenter.classList.add('preview3');

  preview5.classList.remove('preview5');
  preview5.classList.add('preview-center');

  preview6.classList.remove('preview6');
  preview6.classList.add('preview5');

  preview7.classList.remove('preview7');
  preview7.classList.add('preview6');

  preview8.classList.remove('hidden');
  preview8.classList.add('preview7');
};
const toPost = () => {
  preview0.classList.remove('hidden');
  preview0.classList.add('preview1');

  preview1.classList.remove('preview1');
  preview1.classList.add('preview2');

  preview2.classList.remove('preview2');
  preview2.classList.add('preview3');

  preview3.classList.remove('preview3');
  preview3.classList.add('preview-center');

  previewCenter.classList.remove('preview-center');
  previewCenter.classList.add('preview5');

  preview5.classList.remove('preview5');
  preview5.classList.add('preview6');

  preview6.classList.remove('preview6');
  preview6.classList.add('preview7');

  preview7.classList.remove('preview7');
  preview7.classList.add('hidden');
};

document
  .querySelector('.modal .modal-box .preview-list .to-prev-btn')
  .addEventListener('click', toPrev);
document
  .querySelector('.modal .modal-box .preview-list .to-post-btn')
  .addEventListener('click', toPost);
