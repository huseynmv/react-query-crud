export const getPostServiceById = (id: number | string) => {
  return fetch(`http://localhost:3000/posts/${id}`)
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export const updateService = (id: any, post: any) => {
  const data = {
    title: post.title,
    body: post.body,
  };
  return fetch(`http://localhost:3000/posts/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(id);
      return data;
    });
};
