import { login } from "./sdk/login/init";

login({
  container: document.getElementById("login-container"),
  success() {
    console.log(`调用者传入的成功回调得以执行`);
  }
});
