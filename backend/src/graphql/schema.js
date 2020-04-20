import { makeExecutableSchema } from 'graphql-tools';
import Query from './query';
import Mutation from './mutation';
import { userTypes } from './resources/user.schema';
import User from '../app/models/user';

const SchemaDefinition = `
  type Schema {
    query: Query
    mutation: Mutation
  }
`;
const resolvers = {
  Query: {
    user: (_, { id }) => User.findByPk(id),
    users: () => User.findAll(),
  },
};

export default makeExecutableSchema({
  typeDefs: [SchemaDefinition, Query, Mutation, userTypes],
  resolvers,
});
