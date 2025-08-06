import { handleClickShowMenu, handleClickShowUser } from "./common.js";
if (localStorage.getItem("user-logged")) {
  window.location.href = "./index.html";
  return;
}
handleClickShowMenu();
handleClickShowUser();
const loginForm = document.querySelector("#form-login");

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const user = {
    email: formData.get("email"),
    password: formData.get("password"),
  };

  if (user.email.length < 8) {
    alert("Email không được dưới 8 ký tự !");
    return;
  }

  if (user.password.length < 8) {
    alert("Mật khẩu không được dưới 8 ký tự !");
    return;
  }

  let userList = JSON.parse(localStorage.getItem("users"));
  let userLogged = null;
  if (userList == null) {
    userList = [];
    alert("Không tìm thấy user !!!");
  } else {
    let isValidUser = false; // boolean nên đặt biến có is hoặc check.
    // 1. loop kiểm tra xem có user nào trong local storage đúng email và password không
    for (let index = 0; index < userList.length; index++) {
      // const loginUser = userList.index; => Sai
      const currentUser = userList[index];
      // Check email và password cùng luôn : || = or , && = and
      if (
        user.email === currentUser.email &&
        user.password === currentUser.password
      ) {
        isValidUser = true;
        userLogged = currentUser;
      }
    }
    // Kiểm tra sau vòng lặp: Nếu không có user nào đúng thì phủ định nó ! = not => 1. false => true, 2. True => false
    if (!isValidUser) {
      alert("Email hoặc password không đúng !!!");
      return;
    }

    loginForm.reset();
    alert("Đăng nhập thành công !!!");
    localStorage.setItem("user-logged", JSON.stringify(userLogged));
    window.location.href = "./index.html";
  }
});
