export const $ = <T>(selector, scope: HTMLElement | Document = document): T =>
  scope.querySelector(selector);
