const BURGER = document.querySelector(".burger");
const HEADERMENU = document.querySelector(".header-menu");

BURGER.addEventListener("click", function () {
  BURGER.classList.toggle("burger-active");
  HEADERMENU.classList.toggle("menu-open");
});
HEADERMENU.addEventListener("click", function () {
  BURGER.classList.toggle("burger-active");
  HEADERMENU.classList.toggle("menu-open");
});

let a = "jgjhgj";

for (let i = 0; i < a.length; i++) {}
