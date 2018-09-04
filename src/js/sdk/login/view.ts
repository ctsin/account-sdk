import { SDKFormOptions } from "../common/interface";
import { html, render } from "lit-html";

const template = ({
  accountLabel,
  accountPlaceHolder,
  accountMax,
  passwordLabel,
  passwordPlaceHolder,
  passwordMax,
  loginBtnText
}: SDKFormOptions) => html`
  <div id="login-wrapper">
    <p id="login-error" class="login-error"></p>

    <form id="login-form" onsubmit="return false">
      <label class="login-accound-wrapper">
        <span class="account-label">${accountLabel}</span>

        <input 
          id="login-account" 
          data-validate="email" 
          name="account" 
          type="text" 
          placeholder="${accountPlaceHolder}" 
          maxlength="${accountMax}" 
          autocomplete="off"
        />
      </label>

      <label class="login-password-wrapper">
        <span class="password-label">${passwordLabel}</span>

        <input 
          id="login-password" 
          data-validate="required" 
          name="password" 
          type="password" 
          placeholder="${passwordPlaceHolder}" 
          maxlength="${passwordMax}" 
          autocomplete="off"
        />
      </label>

      <label class="login-remember-wrapper" >
        <span>记住密码：</span>
        <input id="login-remember" name="remember" type="checkbox">
      </label>

      <input 
        id="login-btn" 
        class="login-btn" 
        type="submit" 
        value="${loginBtnText}"
      />
    </form>

    <div class="login-extra-wrapper">
      <a href="forget.html">忘记密码</a>
      <a href="register-mobile.html">免费注册</a>
    </div>
  </div>`;

export const view = (opts: SDKFormOptions) => {
  render(template(opts), opts.container);
};
