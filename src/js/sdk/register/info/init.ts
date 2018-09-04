import { SDKFormOptions } from "../../common/interface";
import { FORM_OPTIONS_DEFAULT } from "../../common/constant";

export const registerInfo = (opts: SDKFormOptions) => {
  const options: SDKFormOptions = Object.assign({}, FORM_OPTIONS_DEFAULT, opts);

  console.log("OK");
};
