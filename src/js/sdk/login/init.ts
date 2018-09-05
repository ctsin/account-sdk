import { view } from "./view";
import { model } from "./model";
import {
  SDKFormOptions,
  SDK_FORM_OPTIONS_DEFAULT
} from "../common/form-options";

export const login = (opts: SDKFormOptions) => {
  const options: SDKFormOptions = Object.assign(
    {},
    SDK_FORM_OPTIONS_DEFAULT,
    opts
  );

  view(options);
  model(options);
};
