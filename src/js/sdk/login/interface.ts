/**
 * 登录方法可选参数接口
 */
export interface LoginOptions {
  container: Element;
  loginBtnText?: string;
  accountPlaceHolder?: string;
  accountLabel?: string;
  passwordPlaceHolder?: string;
  passwordLabel?: string;
  verifyPlaceHolder?: string;
  accountMax?: number;
  passwordMax?: number;
  showRemember?: boolean;
  success?: () => void;
}

/**
 * 表单验证方法接口
 */
export interface Rule {
  [ruleName: string]: (key: string) => { type: string; message: string };
}
