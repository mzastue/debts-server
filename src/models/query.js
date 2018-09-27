import gql from 'graphql-tag';
import User from './../db/user';

export const typeDef = gql`    
    type Query {
        User(id: String!): User,
        allUsers: [User],
    }
`;

export const resolver = {
  Query: {
    User: (root, { id }) => {
      return User.findById(id);
    },

    allUsers: () => {
      return User.find();
    },
  }
};

