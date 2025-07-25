const toggle = document.getElementById("menu_toggle");
  const closeBtn = document.getElementById("close_menu");
  const menu = document.getElementById("mobile_menu");

  toggle.addEventListener("click", () => {
    menu.classList.remove("-translate-x-full");
    menu.classList.add("translate-x-0");
  });

  closeBtn.addEventListener("click", () => {
    menu.classList.add("-translate-x-full");
    menu.classList.remove("translate-x-0");
  });

  toggle.addEventListener("click", () => {
  menu.classList.remove("-translate-x-full");
  menu.classList.add("translate-x-0");
  toggle.classList.add("hidden"); // hide hamburger
});

closeBtn.addEventListener("click", () => {
  menu.classList.add("-translate-x-full");
  menu.classList.remove("translate-x-0");
  toggle.classList.remove("hidden"); // show hamburger again
});