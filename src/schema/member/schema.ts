const MemberFields = `
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
  profile_picture: String
  hashed_password: String!
  #dob: Date!
`;

const member_types = `
  type Member {
    _id: ID
    ${MemberFields}
  }
`;

const member_queries = `
  members: [Member]
  member(id: ID!): Member
`;

const member_mutations = `
  createMember(
    email_1: String!, 
    password: String!, 
    first_name: String!, 
    second_name: String!, 
    preferred_name: String
  ): Member
  deleteMember(id: ID!): Int!
`;

export { member_types, member_queries, member_mutations };
