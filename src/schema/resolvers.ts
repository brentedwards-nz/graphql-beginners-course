import Post, { IPost } from "../model/post_model";
import Member, { IMember } from "../model/member_model";

const getPost = async (args: { id: string }): Promise<IPost | null> => {
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

const updatePost = async (args: {
  id: string;
  title?: string;
}): Promise<IPost | null> => {
  try {
    console.log("*** Update Post: 1");
    const post = await Post.findOneAndUpdate(
      { _id: args.id },
      { title: args.title },
      {
        new: true,
      }
    );
    return post;
  } catch (error) {
    console.log("updatePost:", error);
    return null;
  }
};

const deletePost = async (args: { id: string }): Promise<number> => {
  const post = await Post.deleteOne({ _id: args.id });
  return post.deletedCount;
};

const createMember = async (args: {
  first_name: string;
  second_name: string;
}): Promise<IMember> => {
  const post: IMember = await Member.create({
    first_name: args.first_name,
    second_name: args.second_name,
  });
  return post;
};

const getMembers = async (): Promise<IMember[]> => {
  const posts: Array<IMember> = await Member.find();
  return posts;
};

export const root = {
  getPost,
  getPosts,
  createPost,
  updatePost,
  deletePost,
  createMember,
  getMembers,
};
