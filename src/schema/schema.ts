import { buildSchema } from "graphql";

const schema = buildSchema(`
   type Post {
    id: ID!
    title: String!
  }

  type Query {
        getPosts: [Post]
        getPost(id: ID!): Post
    }
`);

export default schema;
