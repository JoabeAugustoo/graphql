const userTypes = `
  #Comentario para documentação !!
  type User {
    id: ID!
    name: String!
    email: String!
  }
`;

const userQueries = `
  users: [User!]!
  user(id: ID!): User
`;

const userMutations = `
  userCreate(name: String!, email: String): User
`;

export { userTypes, userQueries, userMutations };
