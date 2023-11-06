export const addPost = (post: any) => {
  return fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(post),
  })
    .then((res) => res.json())
    .then((res) => {
      return res;
    });
};
