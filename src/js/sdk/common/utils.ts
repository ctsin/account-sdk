export const $ = <T>(selector, scope = document): T =>
  scope.querySelector(selector);
