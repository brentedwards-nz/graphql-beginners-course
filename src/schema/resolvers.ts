import posts from "./database";
import { randomUUID } from "crypto";

type Post = {
  id: string;
  title: string;
};

const getPost = (args: { id: string }): Post | undefined => {
  return posts.find((post: Post) => post.id === args.id);
};

const getPosts = (): Post[] => {
  return posts;
};

const createPost = (args: { title: string }): Post => {
  // generate randon uuid for pet object
  const generatedId = randomUUID().toString();
  // create pet object and save
  const post = { id: generatedId, ...args };
  posts.push(post);
  return post;
};

const updatePost = (args: { id: string; title?: string }): Post => {
  // loop through pets array and get object of pet
  const index = posts.findIndex((post: Post) => post.id === args.id);
  const post = posts[index];

  // update field if it is passed as an argument
  if (args.title) post.title = args.title;
  return post;
};

const deletePost = (args: { id: string }): string => {
  const index = posts.findIndex((post: Post) => post.id === args.id);
  if (index !== -1) {
    posts.splice(index, 1);
  }

  return args.id;
};

export const root = {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
};
