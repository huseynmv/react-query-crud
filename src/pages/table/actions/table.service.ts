export const getPostService = () => {
  return fetch("http://localhost:3000/posts")
    .then((res) => res.json())
    .then((data) => {
      return data;
    });
};

export const deletePostService = (id: number) => {
  return fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
  });
};
