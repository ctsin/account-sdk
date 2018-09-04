import { registerInfo } from "./sdk/register/info/init";
import { $ } from "./sdk/common/utils";

registerInfo({
  container: $("#container"),
  success() {
    console.log("注册成功回调得以执行");
  }
});
