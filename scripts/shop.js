/*----------NAV BAR------------*/

let filterBtn = document.querySelector(".filter-btn");
let sidebarCloseBtn = document.querySelector(".sidebar-close");
let clearBtn = document.querySelectorAll(".clear-all");
let sideBar = document.querySelector(".side-bar");

console.log(sideBar, filterBtn);

//filter funtions
const toogleFilterBar = () => {
  sideBar.classList.toggle("show-filter");
};

const closeFilterBar = () => {
  sideBar.classList.remove("show-filter");
};

filterBtn.addEventListener("click", toogleFilterBar);
clearBtn.forEach((el) => el.addEventListener("click", closeFilterBar));
sidebarCloseBtn.addEventListener("click", closeFilterBar);
