export const postman = (url: string, method = "GET", data?: JSON) => {
  return fetch(url, {
    method,
    headers: {
      "content-type": "application/json"
    },
    body: data ? JSON.stringify(data) : ""
  }).then(res => res.json());
};
