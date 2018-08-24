const enum Methods {
  GET,
  POST,
  PUT,
  DELETE
}

export const postman = (url: string, init?) => {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();

    xhr.onload = () => {
      resolve();
    };

    xhr.onerror = () => {
      reject(new Error("网络连接错误"));
    };

    xhr.ontimeout = () => {
      reject(new Error("网络连接超时"));
    };

    xhr.open(String(Methods.GET), url);

    xhr.send();
  });
};
