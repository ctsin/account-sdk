import { SDKFormOptions } from "./interface";
import { $ } from "./utils";

export const FORM_OPTIONS_DEFAULT: SDKFormOptions = {
  container: $("#form-container"),
  loginBtnText: "登录",
  accountPlaceHolder: "手机号/邮箱/账号",
  accountLabel: "",
  passwordPlaceHolder: "请填写密码",
  passwordLabel: "",
  verifyPlaceHolder: "验证码",
  accountMax: 30,
  passwordMax: 30,
  showRemember: true
};
