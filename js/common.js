export function handleClickShowMenu() {
  const buttonHamburger = document.querySelector(".hamburger button");
  const listNavItems = document.querySelectorAll(".nav-item");
  buttonHamburger.addEventListener("click", function () {
    const navigation = document.querySelector(".nav-func");
    console.log(navigation);
    // add class - remove class
    navigation.classList.toggle("show");
  });
}
export function handleClickShowUser() {
  const iconUser = document.querySelector(".icon-user");
  let user = JSON.parse(localStorage.getItem("user-logged"));
  let html = ``;

  if (user == null) {
    html = `
        <i class="fa-solid fa-user"></i>
                <ul>
                  <li class="nav-item">
                    <a href="./login.html">Login</a>
                  </li>
                  <li class="nav-item">
                    <a href="./signup.html">Register</a>
                  </li>
                </ul>`;
    iconUser.innerHTML = html;
  } else {
    html = `<i class="fa-solid fa-user"></i>
               <ul>
                  <li class="nav-item">${user.email}</li>
                  <li class="nav-item logout">Logout</li>
                </ul>`;
    iconUser.innerHTML = html;
    const logout = document.querySelector(".icon-user .logout");
    logout.addEventListener("click", function () {
      localStorage.removeItem("user-logged");
      alert("Đã đăng xuất !!");
      window.location.reload();
    });
  }
//   parent.addEventListener("click", function () {
//     const ul = document.querySelector(".icon-user ul");
//     ul.classList.toggle("show-user");
//   });
}
