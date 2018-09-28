import gql from 'graphql-tag';
import User from './../db/user';

export const typeDef = gql`
    type User {
        id: String
        name: String
        surname: String
        allDebts: [Debt]
        allLenders: [User]
    }
`;

export const resolver = {
  User: {
    allDebts: (root) => {
      return User.findById(root.id)
        .then(user => user.debts);
    },

    allLenders: async (root) => {
      const lenderIds = await User.findById(root.id)
        .then(user => {
          return JSON.parse(JSON.stringify(user.debts)).map(d => d.lenderId);
        });
      const uniqueLendersIds = Array.from(new Set(lenderIds));
      return uniqueLendersIds.map(lenderId => User.findById(lenderId));
    }
  }
};
