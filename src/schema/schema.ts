//import { buildSchema } from "graphql";

import gql from "graphql-tag";
import { makeExecutableSchema } from "@graphql-tools/schema";

import {member_types, member_queries, member_mutations} from "./member/schema";
import {queries as MemberQueries, mutations as MemberMutations} from "./member/resolvers";

import {club_types, club_queries, club_mutations} from "./club/schema";
import {queries as ClubQueries, mutations as ClubMutations} from "./club/resolvers";

const schema_definition = {
  typeDefs: gql`
    ${member_types}
    ${club_types}

    type Query {
      ${member_queries}
      ${club_queries}
    }

    type Mutation {
      ${member_mutations}
      ${club_mutations}
    }
  `,
  resolvers: {
    Query: {
      ...MemberQueries,
      ...ClubQueries,
    },
    Mutation: {
      ...MemberMutations,
      ...ClubMutations,
    },
  },
};

const schema = makeExecutableSchema(schema_definition);
export default schema;

// const schema = buildSchema(`
//   type Post {
//     id: ID!
//     title: String!
//   }

//   type Member {
//     id: ID!
//     first_name: String!
//     second_name: String!
//     preferred_name: String
//     phone_1: String
//     phone_2: String
//     email_1: String
//     email_2: String
//     address_1: String
//     address_2: String
//     address_3: String
//     profile_picture: String
//     hashed_password: String!
//     #dob: Date!
//   }

//   type AuthResult {
//     member: Member!
//     token: String
//   }

//   type Query {
//     getPosts: [Post]
//     getPost(id: ID!): Post
//     getMembers: [Member]
//     loginMember(email: String!, password: String!): AuthResult
//   }


//   type Mutation {
//     createPost(title: String!): Post!
//     updatePost(id: ID!, title: String): Post!
//     deletePost(id: ID!): Int!

//     registerMember(
//       email: String!, 
//       password: String!, 
//       first_name: String!, 
//       second_name: String!, 
//       preferred_name: String
//     ): AuthResult
//     createMember(
//       first_name: String! 
//       second_name: String!
//       preferred_name: String
//     ): Member!
//     updateMember(
//       first_name: String!
//       second_name: String!
//       preferred_name: String
//     ): Member!
//   }  
// `);

// export default schema;
