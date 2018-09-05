import { SDKFormOptions } from "../../common/form-options";
import { html, render } from "lit-html";

const template = ({
  nickname,
  email,
  realname,
  sex,
  birthday
}: SDKFormOptions) => {
  return html`
    <div id="register-info-wrapper" class="register-info-wrapper">
      <form id="register-info-form" onsubmit="return false">
        <label>
          <span>昵称：</span>
          <input 
            id="register-info-nickname" 
            name="nickname" 
            type="text" 
            placeholder="昵称" 
            validate="present" 
            value="${nickname || ""}"
          />
        </label>

        <label>
          <span>电子邮箱：</span>
          <input 
            id="register-info-email" 
            name="email" 
            type="text" 
            placeholder="电子邮箱" 
            validate="present email" 
            value="${email || ""}"
          />
        </label>

        <label>
          <span>真实姓名：</span>
          <input 
            id="register-info-realname" 
            name="realname" 
            type="text" 
            placeholder="真实姓名" 
            value="${realname || ""}"
          />
        </label>

        <label>
          <span>性别：</span>

          <select 
            id="register-info-sex" 
            name="sex" 
            value="${sex || ""}"
          >
            <option value="1">男</option>
            <option value="2">女</option>
          </select>
        </label>

        <label>
          <span>生日：</span>
          <input 
            id="register-info-birthday" 
            name="birthday" 
            type="date" 
            placeholder="生日" 
            value="${birthday || ""}"
          />
        </label>

        <label>
          <span>居住地：</span>
          <div id="register-info-address"></div>
        </label>

        <label>
          <span></span>
          <input 
            id="register-info-btn" 
            type="submit" 
            value="下一步"
          />
        </label>
      </form>
    </div>`;
};

export const view = async (options: SDKFormOptions) => {
  const { container } = options;

  render(template(options), container);
};
