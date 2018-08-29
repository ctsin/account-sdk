import { view } from "./view";
import { model } from "./model";
import { FormOptions } from "../common/interface";
import { FORM_OPTIONS_DEFAULT } from "../common/constant";

export const login = (opts: FormOptions) => {
  const options: FormOptions = Object.assign({}, FORM_OPTIONS_DEFAULT, opts);

  view(options);
  model(options);
};
