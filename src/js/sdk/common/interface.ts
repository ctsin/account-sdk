/**
 * 登录方法可选参数接口
 */
export interface FormOptions {
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
  success?: () => void;
}

/**
 * 表单验证方法接口
 */
export interface Rule {
  [ruleName: string]: (key: string) => ValidateResult;
}

/**
 * 表单验证方法返回值接口
 */

export interface ValidateResult {
  type: string;
  message: string;
}
