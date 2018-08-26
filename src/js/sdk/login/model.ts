import { $ } from "../common/utils";
import { postman } from "../common/postman";

// 初始化假数据监听
import "../common/mock";
import { LoginOptions } from "./interface";

export const on = (opts: LoginOptions) => {
  const $loginBtn = $("#login-btn");
  const $remember = $("#login-remember");
  const $clearAccount = $("#clear-account");
  const $clearPassword = $("#clear-password");
  const $account = $("#login-account");
  const $password = $("#login-password");
  const $error = $("#login-error");

  $loginBtn.addEventListener("click", async event => {
    await postman("/login").then(() => {
      opts.success();
    });
  });
};
