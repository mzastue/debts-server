import gql from 'graphql-tag';
import User from './../db/user';
import Debt from './../db/debt';

export const typeDef = gql`
    input UserInput {
        name: String
        surname: String
    }

    input DebtInput {
        amount: Int!
        currency: String
        debtorId: String
        lenderId: String
    }

    type Mutation {
        addUser(data: UserInput): User
        addDebt(debt: DebtInput): [Debt]
    }
`;

export const resolver = {
  Mutation: {
    addUser: (root, {data}) => {
      return new Promise((resolve, reject) => {
        const newUser = new User(data);

        newUser.save()
          .then(data => resolve(data))
          .catch(error => reject(error));
      });
    },

    addDebt: async (root, { debt }) => {
      const debtorId = debt.debtorId;
      delete debt.debtorId;

      await User.updateOne(
        { _id: debtorId },
        {
          $push: {
            debts: {
              isApproved: false,
              currency: '',
              ...debt,
            }
          },
        }
      );

      return User.findById(debtorId)
        .then(user => user.debts);
    },
  }
};
