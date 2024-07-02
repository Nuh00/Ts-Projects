// TEMPORARY_DATA
const users = [
  {
    id: 1,
    name: "Alice",
    body: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
  },
  {
    id: 2,
    name: "Bob",
    body: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
  },
  {
    id: 3,
    name: "Charlie",
    body: "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ",
  },
];

const posts = [
  { id: 1, title: "Hello, World!", body: "This is the first post on our blog" },
  {
    id: 2,
    title: "My favorite things",
    body: "This is the second post on our blog",
  },
  { id: 3, title: "How to code", body: "This is the third post on our blog" },
];

export const getPosts = async () => {
  return posts;
};

export const getPost = async (id) => {
  const post =  posts.find((post) => post.id === parseInt(id));
  return post;
};

export const getUsers = async () => {
  return users;
};

export const getUser = async (id) => {
  const user = users.find((user) => user.id === parseInt(id));
    return user;
};
