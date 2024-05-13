import { buildSchema } from "graphql";
import { Kind } from "graphql/language";

const schema = buildSchema(`
  type Post {
    id: ID!
    title: String!
  }

  type Member {
    id: ID!
    first_name: String!
    second_name: String!
    preferred_name: String
    phone_1: String
    phone_2: String
    email_1: String!
    email_2: String
    address_1: String
    address_2: String
    address_3: String
    profile_picture: String
    hashed_password: String!
    #dob: Date!
  }

  type AuthResult {
    member: Member!
    token: string
  }

  type Query {
    getPosts: [Post]
    getPost(id: ID!): Post
    getMembers: [Member]
    loginMember(email: string!, password: string!): AuthResult
  }

  type Mutation {
    createPost(title: String!): Post!
    updatePost(id: ID!, title: String): Post!
    deletePost(id: ID!): Int!

    registerMember(
      email: String!, 
      password: String!, 
      first_name: String!, 
      second_name: String!, 
      preferred_name: String
    ): AuthResult
    createMember(
      first_name: String! 
      second_name: String!
      preferred_name: String
    ): Member!
    updateMember(
      first_name: String!
      second_name: String!
      preferred_name: String
    ): Member!
  }  
`);

export default schema;
