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
  if (userList == null) {
    userList = [];
    alert("Chưa có tài khoản nào đã đăng ký, vui lòng đăng ký để tiếp tục !");
    window.location.href = "signup.html";
  } else {
    existEmail = true;
    for (let index = 0; index < userList.length; index++) {
      const loginUser = userList.index;
      if (user.email != loginUser.email) {
        alert("Sai thông tin đăng nhập !");
        existEmail = false;
        return;
      }
      if (user.password != loginUser.password) {
        alert("Sai thông tin đăng nhập !");
        existEmail = false;
        return;
      } else {
        existEmail = true;
        window.location.href = "index.html";
      }
    }
  }
  registerForm.reset();
});

//   // click show menu
//   const buttonHamburger = document.querySelector(".hamburger button");
//   const listNavItems = document.querySelectorAll(".nav-item");
//   buttonHamburger.addEventListener("click", function () {
//     const navigation = document.querySelector(".nav-func");
//     console.log(navigation);
//     // add class - remove class
//     navigation.classList.toggle("show");
//   });
