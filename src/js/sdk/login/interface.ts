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
