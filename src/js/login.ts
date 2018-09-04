import { login } from "./sdk/login/init";
import { $ } from "./sdk/common/utils";

login({
  container: $("#login-container"),
  success() {
    console.log(`调用者传入的成功回调得以执行`);
  }
});
