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
