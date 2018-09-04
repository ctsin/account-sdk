import { view } from "./view";
import { model } from "./model";
import { SDKFormOptions } from "../common/interface";
import { FORM_OPTIONS_DEFAULT } from "../common/constant";

export const login = (opts: SDKFormOptions) => {
  const options: SDKFormOptions = Object.assign({}, FORM_OPTIONS_DEFAULT, opts);

  view(options);
  model(options);
};
