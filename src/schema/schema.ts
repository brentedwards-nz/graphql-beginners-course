import { buildSchema } from "graphql";
import { Kind } from "graphql/language";

const schema = buildSchema(`
  type Post {
    id: ID!
    title: String!
  }

  #scalar Date

  type Member {
    id: ID!
    first_name: String!
    second_name: String!
    preferred_name: String
    phone_1: String
    phone_2: String
    email_1: String
    email_2: String
    address_1: String
    address_2: String
    address_3: String
    #dob: Date!
  }

  type Query {
    getPosts: [Post]
    getPost(id: ID!): Post
    getMembers: [Member]
  }

  type Mutation {
    createPost(title: String!): Post!
    updatePost(id: ID!, title: String): Post!
    deletePost(id: ID!): Int!
    createMember(first_name: String!, second_name: String!): Member!
  }  
`);

export default schema;
