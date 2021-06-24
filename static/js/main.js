// account 버튼
const accountToggle = () => {
  document.querySelector("header .account-menu").classList.toggle("active");
};

// const accountClose = () => {
//   document.querySelector("header .account-btn").classList.remove("active");
// };

document
  .querySelector("header .account-btn")
  .addEventListener("click", accountToggle);

//
// write 버튼
const writeOpen = () => {
  document.querySelector(".modal").classList.remove("hidden");
};

const writeClose = () => {
  document.querySelector(".modal").classList.add("hidden");
};

document.querySelector(".write-btn").addEventListener("click", writeOpen);
document.querySelector(".background").addEventListener("click", writeClose);

