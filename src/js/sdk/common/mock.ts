import FetchMock from "fetch-mock";

FetchMock.mock("./login", () => {
  return { x: Math.random() * 999 };
});
