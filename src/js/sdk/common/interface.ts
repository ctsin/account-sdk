import { FromControlType } from "./enum";

/**
 * 网络请求方法的参数接口
 */
export interface Request {}

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

/**
 * <select /> 生成方法参数接口
 */

export interface FormControlRender {
  (container: HTMLElement, name: string): void;
}
