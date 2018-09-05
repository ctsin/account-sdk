import { $ } from "./utils";

/**
 * SDK 表单方法参数接口
 */
export interface SDKFormOptions {
  container?: HTMLElement;
  loginBtnText?: string;
  accountPlaceHolder?: string;
  accountLabel?: string;
  passwordPlaceHolder?: string;
  passwordLabel?: string;
  verifyPlaceHolder?: string;
  accountMax?: number;
  passwordMax?: number;
  showRemember?: boolean;
  nickname?: string;
  email?: string;
  realname?: string;
  sex?: string;
  birthday?: Date;
  success?: () => void;
}

/**
 * SDK 表单方法默认参数
 */
export const SDK_FORM_OPTIONS_DEFAULT: SDKFormOptions = {
  container: $("#form-container"),
  loginBtnText: "登录",
  accountPlaceHolder: "手机号/邮箱/账号",
  accountLabel: "",
  passwordPlaceHolder: "请填写密码",
  passwordLabel: "",
  verifyPlaceHolder: "验证码",
  accountMax: 30,
  passwordMax: 30,
  showRemember: true,
  nickname: "",
  email: "",
  realname: "",
  sex: "",
  birthday: new Date(),
  success: () => void 0
};
