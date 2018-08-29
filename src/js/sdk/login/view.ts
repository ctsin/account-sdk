import { LoginOptions } from "./interface";
import { html, render } from "lit-html";

const template = (opts: LoginOptions) => {
  return html`
    <div id="login-wrapper">
      <p id="login-error" class="login-error"></p>
        <form id="login-form" onsubmit="return false">
          <label class="login-accound-wrapper">
            <span class="account-label">${opts.accountLabel}</span>
            <input 
              id="login-account" 
              validate="required" 
              name="account" 
              type="text" 
              placeholder="${opts.accountPlaceHolder}" 
              maxlength="${opts.accountMax}" 
              autocomplete="off"
            />
            <span id="clear-account" class="del"></span>
          </label>

          <label class="login-password-wrapper">
            <span class="password-label">${opts.passwordLabel}</span>
            <input 
              id="login-password" 
              validate="required" 
              name="password" 
              type="password" 
              placeholder="${opts.passwordPlaceHolder}" 
              maxlength="${opts.passwordMax}" 
              autocomplete="off"
            />
            <span id="clear-password" class="del"></span>
          </label>

          <label class="login-remember-wrapper" >
            <span>记住密码：</span>
            <input id="login-remember" name="remember" type="checkbox">
          </label>

          <input 
            id="login-btn" 
            class="login-btn" 
            type="submit" 
            value="${opts.loginBtnText}"
          />
        </form>
        <div class="login-extra-wrapper">
          <a href="forget.html">忘记密码</a>
          <a href="register-mobile.html">免费注册</a>
        </div>
    </div>`;
};

export const view = (opts: LoginOptions) => {
  render(template(opts), opts.container);
};
