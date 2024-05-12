import { buildSchema } from "graphql";

const schema = buildSchema(`
  type Post {
    id: ID!
    title: String!
  }

  type User {
    id: ID!
    first_name: String!
    surname_name: String!
  }

  type Query {
    getPosts: [Post]
    getPost(id: ID!): Post
  }

  type Mutation {
    createPost(title: String!): Post!
    updatePost(id: ID!, title: String): Post!
    deletePost(id: ID!): ID!
    createUser(first_name: String!, surname_name: String!): User!
  }  
`);

export default schema;
