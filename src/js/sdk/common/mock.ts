import FetchMock from "fetch-mock";

FetchMock.mock("/login", { status: 200, message: "登录成功" });
