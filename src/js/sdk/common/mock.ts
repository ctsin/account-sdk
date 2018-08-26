import FetchMock from "fetch-mock";

FetchMock.mock("/login", (undefined, opts) => {
  return { code: 200, message: "SUCCESS" };
});
