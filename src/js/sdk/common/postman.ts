import { APIKEY } from "../auth/token";
import { JSONBIN } from "./api";

export const postman = (route: string) => {
  const req = (method = "GET", data?) => {
    const requestInit: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "token " + APIKEY
      },
      mode: "cors"
    };

    data && (requestInit.body = JSON.stringify(data));

    return fetch(JSONBIN + route, requestInit).then(res => res.json());
  };

  const get = () => req();
  const patch = data => req("PATCH", data);
  const post = data => req("POST", data);

  return { get, patch, post };
};
