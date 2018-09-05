import {
  SDKFormOptions,
  SDK_FORM_OPTIONS_DEFAULT
} from "../../common/form-options";
import { model } from "./model";
import { view } from "./view";

export const registerInfo = (opts: SDKFormOptions) => {
  const options: SDKFormOptions = Object.assign(
    {},
    SDK_FORM_OPTIONS_DEFAULT,
    opts
  );

  view(options);
  model(options);
};
