import gql from 'graphql-tag';
import User from './../db/user';

export const typeDef = gql`
    type User {
        id: String
        name: String
        surname: String
        allDebts: [Debt]
        allLenders: [User]
        Debt(id: String): Debt
    }
`;

export const resolver = {
  User: {
    allDebts: async root => {
      const user = await User.getById(root.id);
      return user.debts;
    },

    allLenders: async (root) => {
      const user = await User.getById(root.id);
      return user.hasDebts()
        ? user.getLenders()
        : [];
    },

    Debt: async (root, { id }) => {
      const user = await User.getById(root.id);
      return user.getDebt(id);
    }
  },
};
