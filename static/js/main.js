const body = document.querySelector("body");
const accountBtn = document.querySelector("header .account-btn");
const accountMenu = document.querySelector("header .account-menu");

// body.addEventListener("click", () => {
//   if (accountMenu.classList.contains("active")) {
//     accountMenu.classList.remove("active");
//   }
// });

accountBtn.addEventListener("click", () => {
  accountMenu.classList.toggle("active");
});
