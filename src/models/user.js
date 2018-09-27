import gql from 'graphql-tag';
import User from './../db/user';

export const typeDef = gql`
    type User {
        id: String
        name: String
        surname: String
        allDebts: [Debt]
    }
`;

export const resolver = {
  User: {
    allDebts: (root, args) => {
      return User.findById(root.id)
        .then(user => user.debts);
    },
  }
};
