export const postman = (url: string) => {
  const get = () => {
    return fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    }).then(res => res.json());
  };

  const post = (data = {}) => {
    return fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    }).then(res => res.json());
  };

  return { get, post };
};
