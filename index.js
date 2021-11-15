const closeBtn = document.getElementById("close-nav");
const openBtn = document.getElementById("open-nav");
const nav = document.querySelector(".nav");

closeBtn.addEventListener("click", () => {
  nav.classList.remove("nav-open");
});

openBtn.addEventListener("click", () => {
  nav.classList.add("nav-open");
});
