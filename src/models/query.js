import gql from 'graphql-tag';
import User from './../db/user';

export const typeDef = gql`
  type Query {
    User(id: String!): User
  }
`;

export const resolver = {
  Query: {
    User: (root, { id }) => {
      return User.findById(id);
    },
  }
};

