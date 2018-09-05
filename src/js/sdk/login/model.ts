import { SDKFormOptions } from "../common/form-options";
import { $ } from "../common/utils";
import { postman } from "../common/postman";
import { validator } from "../common/validator";

// 初始化假数据监听
import "../common/mock";
import { MockResponseObject } from "fetch-mock";

export const model = ({ success }: SDKFormOptions) => {
  const $loginForm: HTMLFormElement = $("#login-form");
  const $loginBtn: HTMLButtonElement = $("#login-btn");
  const $remember: HTMLInputElement = $("#login-remember");
  const $account: HTMLInputElement = $("#login-account");
  const $password: HTMLInputElement = $("#login-password");
  const $error: HTMLParagraphElement = $("#login-error");

  /**
   * 提交表单
   * todo 准备将表单项抽出为组件。所以，这里忽略了 oninput 等事件。
   */
  $loginBtn.addEventListener("click", async () => {
    $error.innerHTML = "";

    const validateReault = validator($loginForm);

    if (validateReault.length) {
      $error.innerHTML = validateReault
        .map(result => `<div>${result.message}</div>`)
        .join("");

      // 客户端表单验证失败
      return false;
    }

    const loginRequest: MockResponseObject = await postman("/login").post({
      account: $account.value,
      password: $password.value,
      remember: $remember.checked
    });

    if (loginRequest.status === 200 && !`但是，服务器大手一挥，拒绝了登录！`) {
      $error.innerHTML = `服务器传来低吼：不！行！`;

      // 服务端登录失败
      return false;
    }

    // Yep
    success();
  });
};
