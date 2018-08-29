import { LoginOptions } from "./interface";
import { $ } from "../common/utils";
import { postman } from "../common/postman";
import { validator } from "../common/validator";

// 初始化假数据监听
import "../common/mock";
import { MockResponseObject } from "fetch-mock";

export const on = (opts: LoginOptions) => {
  const $loginForm: HTMLFormElement = $("#login-form");
  const $loginBtn: HTMLButtonElement = $("#login-btn");
  const $remember: HTMLInputElement = $("#login-remember");
  const $clearAccount: HTMLSpanElement = $("#clear-account");
  const $clearPassword: HTMLSpanElement = $("#clear-password");
  const $account: HTMLInputElement = $("#login-account");
  const $password: HTMLInputElement = $("#login-password");
  const $error: HTMLElement = $("#login-error");

  $loginBtn.addEventListener("click", async () => {
    $error.innerHTML = "";

    const validateReault = validator($loginForm);

    const loginPost: MockResponseObject = await postman("/login").post({
      account: $account.value,
      password: $password.value,
      remember: $remember.checked
    });

    loginPost.status === 200
      ? opts.success()
      : ($error.innerHTML = `服务器端拒绝登录`);
  });
};
