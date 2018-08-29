import { Rule } from "../login/interface";

const messageFormated = key => `您填写的${key}格式不正确`;

// 验证规则
const rules: Rule = {
  email(v: string) {
    const reg = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    if (!v.match(reg)) {
      return {
        type: "email",
        message: messageFormated("邮箱")
      };
    }
  },

  required(v: string) {
    if (!v.trim()) {
      return {
        type: "required",
        message: messageFormated("必填项")
      };
    }
  }
};

export const validator = (form: HTMLFormElement) => {
  const elements: HTMLFormControlsCollection = form.elements;

  return Array.from(elements)
    .filter((el: HTMLInputElement) => !!el.getAttribute("validate"))
    .reduce((results, current: HTMLInputElement) => {
      const value = current.value;

      current
        .getAttribute("validate")
        .replace(/\s+/g, " ")
        .trim()
        .split(" ")
        .forEach(rule => {
          const result = rules[rule](value);

          result && results.push(result);
        });

      return results;
    }, []);
};
