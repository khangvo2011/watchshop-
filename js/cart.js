import { handleClickShowMenu, handleClickShowUser } from "./common.js";

handleClickShowMenu();
handleClickShowUser();

parent.addEventListener("click", function () {
  const ul = document.querySelector(".icon-user ul");
  ul.classList.toggle("show-user");
});
