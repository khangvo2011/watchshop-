const registerForm = document.querySelector(" #form-register");
console.log(registerForm);
registerForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const formData = new FormData(registerForm);
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

  if (user.password != formData.get("confirm-password")) {
    alert("2 mật khẩu không giống nhau !");
    return;
  }

  let userList = JSON.parse(localStorage.getItem("users"));
  if (userList == null) {
    userList = [];
  } else {
    let existEmail = false;
    for (let index = 0; index < userList.length; index++) {
      const currentUser = userList[index];
      if (user.email == currentUser.email) {
        existEmail = true;
      }
    }
    if (existEmail) {
      alert("Tài khoản đăng ký đã tồn tại");
      return;
    }
  }
  userList.push(user);
  localStorage.setItem("users", JSON.stringify(userList));
  window.location.href = "index.html"
  registerForm.reset();
});
