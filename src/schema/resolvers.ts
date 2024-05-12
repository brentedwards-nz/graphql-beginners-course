import { randomUUID } from "crypto";
import Post, { IPost } from "./model";
import { HydratedDocument } from "mongoose";

// type IPost = {
//   id: string;
//   title: string;
// };

const getPost = async (args: { id: string }): Promise<IPost | null> => {
  console.log("getPost:", args.id);
  const post: IPost | null = await Post.findById(args.id);
  return post;
};

const getPosts = async (): Promise<IPost[]> => {
  const posts: Array<IPost> = await Post.find();
  return posts;
};

const createPost = async (args: { title: string }): Promise<IPost> => {
  const post: IPost = await Post.create({
    title: args.title,
  });
  return post;
};

// const updatePost = (args: { id: string; title?: string }): IPost => {
//   // loop through pets array and get object of pet
//   const index = IPosts.findIndex((post: IPost) => IPost.id === args.id);
//   const IPost = IPosts[index];

//   // update field if it is passed as an argument
//   if (args.title) IPost.title = args.title;
//   return IPost;
// };

const deletePost = async (args: { id: string }): Promise<number> => {
  const post = await Post.deleteOne({ _id: args.id });
  return post.deletedCount;
};

export const root = {
  getPost,
  getPosts,
  createPost,
  //updatePost,
  deletePost,
};
