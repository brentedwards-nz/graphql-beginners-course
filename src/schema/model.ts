import mongoose, { Schema, HydratedDocument, Model } from "mongoose";

export interface IPost {
  id: string;
  title: string;
}

interface IPostMethods {
  fullName(): string;
}

interface IPostModel extends Model<IPost, {}, IPostMethods> {
  findAllUsers(): HydratedDocument<IPost, IPostMethods>;
}

const PostSchema = new Schema<IPost, IPostModel>({
  title: { type: String, required: true },
});

// static method
PostSchema.statics.findAllPosts = function () {
  return this.find();
};

// instance method
PostSchema.method("fullName", function fullName() {
  return "Full name";
});

// exporting the schema and model
const Post = mongoose.model<IPost, IPostModel>("Post", PostSchema);
export default Post;
