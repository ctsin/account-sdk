import { view } from "./view";
import { on } from "./model";
import { LoginOptions } from "./interface";

export const login = (opts: LoginOptions) => {
  const DEFAULT_OPTIONS = {
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

  const options = Object.assign({}, DEFAULT_OPTIONS, opts);

  view(options);
  on(options);
};
