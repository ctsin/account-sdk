import { $ } from "../common/utils";
import { postman } from "../common/postman";
import "../common/mock";

export const on = (opts = {}) => {
  const $loginBtn = $("#login-btn");
  const $remember = $("#login-remember");
  const $clearAccount = $("#clear-account");
  const $clearPassword = $("#clear-password");
  const $account = $("#login-account");
  const $password = $("#login-password");
  const $error = $("#login-error");

  $loginBtn.addEventListener("click", async event => {
    const data = await fetch("./login").then(res => res.json());
    console.log("data :", data);
  });
};
